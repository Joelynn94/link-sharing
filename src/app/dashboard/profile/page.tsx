export default function Profile() {
  return (
    <div className="p-4 pb-12">
      <div className="flex flex-col relative bg-white rounded-md">
        <div className="p-6">
          <h1 className="text-2xl mb-3">Profile Details</h1>
          <p className="text-gray-400">
            Add your details to create a personal touch to your profile.
          </p>

          <div className="flex flex-col rounded-md bg-gray-50 mt-6 p-6">
            <h6 className="mb-3">Profile picture</h6>
            <div className="flex flex-col items-center justify-center rounded-md bg-purple-100 text-purple-600 p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 40 40"
                className="fill-current mb-3"
              >
                <path d="M33.75 6.25H6.25a2.5 2.5 0 0 0-2.5 2.5v22.5a2.5 2.5 0 0 0 2.5 2.5h27.5a2.5 2.5 0 0 0 2.5-2.5V8.75a2.5 2.5 0 0 0-2.5-2.5Zm0 2.5v16.055l-4.073-4.072a2.5 2.5 0 0 0-3.536 0l-3.125 3.125-6.875-6.875a2.5 2.5 0 0 0-3.535 0L6.25 23.339V8.75h27.5ZM6.25 26.875l8.125-8.125 12.5 12.5H6.25v-4.375Zm27.5 4.375h-3.34l-5.624-5.625L27.91 22.5l5.839 5.84v2.91ZM22.5 15.625a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Z" />
              </svg>
              <p>+ Upload Image</p>
            </div>

            <small className="mt-6 text-gray-500">
              Image must be below 1024x1024px. Use PNG or JPG format.
            </small>
          </div>

          <div className="flex flex-col rounded-md bg-gray-50 mt-6 p-6">
            <form>
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium">
                  First Name*
                </label>
                <input
                  type="text"
                  className="bg-white border outline-none border-gray-300 text-gray-700 text-sm rounded-lg focus:border-purple-500 focus:ring-4 ring-purple-300 focus:shadow-md block w-full p-2.5"
                />
              </div>
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium">
                  Last Name*
                </label>
                <input
                  type="text"
                  className="bg-white border outline-none border-gray-300 text-gray-700 text-sm rounded-lg focus:border-purple-500 focus:ring-4 ring-purple-300 focus:shadow-md block w-full p-2.5"
                />
              </div>
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium">Email*</label>
                <input
                  type="email"
                  className="bg-white border outline-none border-gray-300 text-gray-700 text-sm rounded-lg focus:border-purple-500 focus:ring-4 ring-purple-300 focus:shadow-md block w-full p-2.5"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="p-4 rounded-b-md border-t-2 border-gray-100">
          <button className="w-full px-3 py-2 rounded-md font-bold bg-purple-300 text-white focus:ring-2">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
