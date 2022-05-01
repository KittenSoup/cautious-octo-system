import Link from 'next/link';

type TLayout = {
  children?:
  | React.ReactChild
  | React.ReactChild[]
}

export default function Layout({ children }: TLayout) {

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-sky-300 mb-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          <Link href='/'>
            <a>🏡</a>
          </Link>
          <span className='mx-auto'>Time 2 get your quiz on!</span>{' '}
        </div>
      </header>
      <main className='container mx-auto flex-1'>{children}</main>
      <footer className='bg-sky-300 mt-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          &copy; 2022 Quizguiden
        </div>
      </footer>
    </div>
  );
}
