import {
  Search,
  AppIndicator,
  BookmarkFill,
  HouseFill,
  ChatLeftTextFill,
  BoxArrowInRight,
  ChevronDown,
} from 'react-bootstrap-icons';

const Sidebar = () => {
  return (
    <div className="sidebar h-screen lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1 flex items-center">
          <AppIndicator color="white" />
          <h1 className="font-bold text-gray-200 text-[15px] ml-3">
            Dashboard
          </h1>
          <i
            className="bi bi-x cursor-pointer ml-28 lg:hidden"
            // onClick="openSidebar()"
          ></i>
        </div>
        <div className="my-2 bg-gray-600 h-[1px]"></div>
        <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
          <Search />
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <HouseFill />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <BookmarkFill />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Bookmark
          </span>
        </div>

        <div className="my-4 bg-gray-600 h-[1px]"></div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <ChatLeftTextFill />
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Chatbox
            </span>
            <ChevronDown rotate={45} />
          </div>
        </div>
        <div
          className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
          id="submenu"
        >
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
            Social
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
            Social
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
            Social
          </h1>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <BoxArrowInRight />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
