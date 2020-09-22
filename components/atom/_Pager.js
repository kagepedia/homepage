import Link from 'next/link';

const _Pager = ({ total, page, perPage, href, asCallback }) => {
  const prevPage = page > 1 ? page - 1 : null;
  let nextPage = null;
  if (page < Math.ceil(total / perPage)) {
    nextPage = page + 1;
  }

  const lastPage = Math.ceil(total / perPage);
  const pageNum = [...Array(lastPage).keys()].map((i) => ++i);

  return (
    <div>
      <div className="flex flex-col items-center my-12">
        <div className="flex text-gray-700">
          {prevPage ? (
            <Link href={href} as={asCallback(prevPage)}>
              <a className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer hover:bg-blue-800 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-left w-6 h-6"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </a>
            </Link>
          ) : (
            ``
          )}
          <div className="flex h-12 font-medium rounded-full bg-gray-200">
            {pageNum.length > 0
              ? pageNum.map((i) =>
                  page > 2 && i === 2 ? (
                    <div className="w-12 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full">...</div>
                  ) : page < lastPage - 1 && i === lastPage - 1 ? (
                    <div className="w-12 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full">...</div>
                  ) : i === 1 ? (
                    <div className="w-12 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-blue-800 text-white">{i}</div>
                  ) : (
                    <Link href={href} as={asCallback(i)}>
                      <a key={i} className="w-12 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full hover:bg-blue-800 hover:text-white">
                        {i}
                      </a>
                    </Link>
                  )
                )
              : null}
          </div>
          {nextPage ? (
            <Link href={href} as={asCallback(nextPage)}>
              <a className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 hover:bg-blue-800 hover:text-white cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right w-6 h-6"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
            </Link>
          ) : (
            ``
          )}
        </div>
      </div>
    </div>
  );
};

export default _Pager;
