export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard", "/dashboard/customers", "/dashboard/invoices", "/dashboard/reports"]}