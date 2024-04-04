import { CreateCustomer } from "@/app/ui/customers/buttons";
import { lusitana } from '@/app/ui/fonts';

export default function Customers (){
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <CreateCustomer />
            </div>
        </div>
    );
}