import { CreateCustomer } from "@/app/ui/customers/buttons";
import { lusitana } from '@/app/ui/fonts';
import { fetchCustomerPages } from "@/app/lib/functions";
import Table from '@/app/ui/customers/table';
import Pagination from "@/app/ui/invoices/pagination";

export default async function Customers ({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {

    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchCustomerPages(query);

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <CreateCustomer />
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Table query={query} currentPage={currentPage}/>
            </div>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}