import { Helmet } from 'react-helmet-async';
import { forwardRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  meta?: ReactNode;
  title: string;
}

const Page = forwardRef<HTMLDivElement, Props>(
  ({ children, title = '', meta, ...other }, ref) => (
    <>
      <Helmet>
        <title>{`${title} | Keda - Tech`}</title>
        {meta}
      </Helmet>

      <main ref={ref} {...other}>
        {children}
      </main>
    </>
  )
);

export default Page;
