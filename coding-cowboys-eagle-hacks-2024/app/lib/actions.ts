'use server';

const { db } = require('@vercel/postgres');
import { z } from "zod";

const InvoiceFormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
  });
   
  const CreateInvoice = InvoiceFormSchema.omit({ id: true });
   
  export async function createInvoice(formData: FormData) {
    const { customerId, amount, date, status } = CreateInvoice.parse({
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      date: formData.get('date'),
      status: formData.get('status'),
    });

    try {
    const client = await db.connect();
    client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    
    const insertIntoInvoices = client.sql`INSERT INTO invoices (customer_id, amount, status, date)
               VALUES (${customerId}, ${amount}, ${status}, ${date})
               ON CONFLICT (id) DO NOTHING;
               `;
      
      return {
        insertIntoInvoices,

      };     
    } catch (error) {
      console.error('Error inserting new invoice: ', error);
      throw error;
    }

  }

  const CustomerFormSchema = z.object({
    customerId: z.string(),
    customerName: z.string(),
    customerEmail: z.string(),
  });

  const CreateCustomer = CustomerFormSchema.omit({ customerId: true });

  export async function createCustomer(formData: FormData) {
    const { customerName, customerEmail } = CreateCustomer.parse({
      customerName: formData.get('customerName'),
      customerEmail: formData.get("customerEmail"),
    });

    try {
      const client = await db.connect();
      client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

      const insertIntoCustomers = client.sql`INSERT INTO customers (name, email)
                                            VALUES (${customerName}, ${customerEmail})
                                            ON CONFLICT (id) DO NOTHING;
                                            `;
    
      return {
        insertIntoCustomers,
      };
    } catch (error) {
      console.error('Error inserting new customer: ', error);
      throw error;
    }
  }