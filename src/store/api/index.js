export const companySharesAPI = {
  fetchCompanyShares: () =>
    fetch(
      `https://CHEMITEST.iex.cloud/v1/data/CHEMITEST/COMPANY_SHARES?last=100&token=${process.env.REACT_APP_PUBLIC_TOKEN}`,
    )
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => err),
}
