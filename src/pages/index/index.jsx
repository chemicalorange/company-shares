import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCompanyShares } from '../../store/slices/companySharesSlice'
import { useEffect } from 'react'
import usePagination from '../../hooks/usePagination'
import { TableDnd } from '../../components/ui/table-dnd'
import { Loading } from '../../components/ui/loading'

export function IndexPage() {
  const companyShares = useSelector((state) => state.companyShares.items)
  const reqStatus = useSelector((state) => state.companyShares.status)
  const dispatch = useDispatch()

  const { page, nextPage, prevPage, totalPages, firstContentIndex, lastContentIndex } = usePagination({
    contentPerPage: 10,
    count: companyShares ? companyShares.length : 0,
  })

  useEffect(() => {
    dispatch(fetchCompanyShares())
  }, [dispatch])

  return (
    <div className={styles.wrapper}>
      {reqStatus === 'pending' && <Loading />}
      {reqStatus === 'rejected' && <h2>Cannot fetch data</h2>}
      {reqStatus === 'fulfilled' && (
        <>
          <TableDnd
            titles={Object.keys(companyShares[0])}
            firstIndex={firstContentIndex}
            elements={companyShares.filter((_, index) => index >= firstContentIndex && index < lastContentIndex)}
          />
          <div className={styles.pagination}>
            <button onClick={prevPage} disabled={1 === page}>
              prev
            </button>
            <div>
              {page} / {totalPages}
            </div>
            <button onClick={nextPage} disabled={page === totalPages}>
              next
            </button>
          </div>
        </>
      )}
    </div>
  )
}
