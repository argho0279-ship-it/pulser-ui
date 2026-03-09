import React from 'react';
import { useForm, FormProvider as RHFProvider, Controller as RHFController } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const formSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z.string().min(1, 'Password is required').min(6, 'Password must be at least 6 characters'),
});

export type FormSchema = z.infer<typeof formSchema>;

export interface FormProps<TValues extends Record<string, any> = FormSchema> {
  schema?: z.ZodType<TValues>;
  defaultValues?: Partial<TValues>;
  onSubmit: (data: TValues) => void;
  children: React.ReactNode;
  className?: string;
}

export const Form = <TValues extends Record<string, any> = FormSchema>({
  schema = formSchema as unknown as z.ZodType<TValues>,
  defaultValues,
  onSubmit,
  children,
  className,
}: FormProps<TValues>) => {
  const methods = useForm<TValues>({
    resolver: zodResolver(schema as any) as any,
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
