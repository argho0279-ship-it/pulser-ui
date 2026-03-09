import React from 'react';
import { useForm, FormProvider as RHFProvider, Controller as RHFController } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const formSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z.string().min(1, 'Password is required').min(6, 'Password must be at least 6 characters'),
});

export type FormSchema = z.infer<typeof formSchema>;

export interface FormProps<T extends z.ZodType<any>> {
  schema?: T;
  defaultValues?: Partial<z.infer<T>>;
  onSubmit: (data: z.infer<T>) => void;
  children: React.ReactNode;
  className?: string;
}

export const Form = <T extends z.ZodType<any>>({ schema = formSchema as T, defaultValues, onSubmit, children, className }: FormProps<T>) => {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as any,
  });

  return (
    <RHFProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </RHFProvider>
  );
};

export const Controller = RHFController;
