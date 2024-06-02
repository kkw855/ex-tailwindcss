export default function Home() {
  return (
    <main>
      <p className='truncate'>This is a long sentence with a lot of words to explain that truncate will truncate my sentence</p>
      <h1 className='text-3xl'>Title 1</h1>
      <h2 className='font-nanumGothic text-2xl'>제목 2</h2>
      <h3 className='text-xl'>Title 3</h3>
      <p className='text-base underline decoration-red-500 decoration-wavy decoration-1 underline-offset-8 leading-normal capitalize'>a regular paragraph</p>
      <p className='text-sm'>A description paragraph</p>
      <p className='text-xs'>A little note</p>
      <p className='text-xs md:text-lg lg:text-3xl bg-[#bada55]'>Hello long sentence</p>
      <h1 className='text-vuejs-100'>Hello World</h1>
      <h1 className='bg-vuejs-932'>Hello World</h1>
    </main>
  )
}
