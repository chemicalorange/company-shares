import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCompanyShares, updateCompanyShares } from '../../store/slices/companySharesSlice'
import { useEffect } from 'react'
import usePagination from '../../hooks/usePagination'
import { TableDnd } from '../../components/ui/table-dnd'

export function IndexPage() {
  const companyShares = useSelector((state) => state.companyShares)
  const dispatch = useDispatch()

  const { page, nextPage, prevPage, totalPages, firstContentIndex, lastContentIndex } = usePagination({
    contentPerPage: 4,
    count: companyShares.data ? companyShares.data.length : 0,
  })

  useEffect(() => {
    dispatch(fetchCompanyShares())
  }, [dispatch])

  const updateOrder = (array) => {
    const newArray = [...companyShares.data]
    const newValues = [...array]
    for (let i = firstContentIndex; i < firstContentIndex + array.length; i++) {
      let newItem = newValues.shift()
      newArray[i] = newItem
    }
    dispatch(updateCompanyShares(newArray))
  }

  return (
    <div className={styles.wrapper}>
      {companyShares.data && (
        <>
          <TableDnd
            titles={Object.keys(companyShares.data[0])}
            elements={companyShares.data.filter((_, index) => index >= firstContentIndex && index < lastContentIndex)}
            onUpdate={updateOrder}
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