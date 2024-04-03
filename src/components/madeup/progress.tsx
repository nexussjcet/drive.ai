import React from "react";

const Timeline: React.FC = () => {
  return (
    <ol className="timeline w-85 max-w-700 mx-auto flex flex-col border-l-2 border-gray-200 py-8 pl-8 text-base">
      <li className="timeline-item mt-8 flex gap-8">
        <span className="timeline-item-icon -ml-14 flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full shadow-white">
          <i className="avatar">
            <img
              src="https://assets.codepen.io/285131/hat-man.png"
              className="h-full w-full object-cover"
              alt="Avatar"
            />
          </i>
        </span>
        <div className="new-comment w-full">
          <input
            type="text"
            placeholder="Add a comment..."
            className="h-12 w-full rounded-md border border-gray-200 px-4 placeholder-gray-300 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
      </li>
      <li className="timeline-item mt-8 flex gap-8">
        <span className="timeline-item-icon -ml-14 flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5 fill-current"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"></path>
          </svg>
        </span>
        <div className="timeline-item-description flex items-center gap-2">
          <i className="avatar small">
            <img
              src="https://assets.codepen.io/285131/winking-girl.png"
              className="h-7 w-7 rounded-full object-cover"
              alt="Avatar"
            />
          </i>
          <span>
            <a
              href="#"
              className="font-medium text-gray-500 hover:text-blue-500"
            >
              Luna Bonifacio
            </a>{" "}
            has changed{" "}
            <a
              href="#"
              className="font-medium text-gray-500 hover:text-blue-500"
            >
              2 attributes
            </a>{" "}
            on <time dateTime="2021-01-21">Jan 21, 2021</time>
          </span>
        </div>
      </li>
      <li className="timeline-item mt-8 flex gap-8">
        <span className="timeline-item-icon -ml-14 flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5 fill-current"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 13H4v-2h8V4l8 8-8 8z"></path>
          </svg>
        </span>
        <div className="timeline-item-description flex items-center gap-2">
          <i className="avatar small">
            <img
              src="https://assets.codepen.io/285131/hat-man.png"
              className="h-7 w-7 rounded-full object-cover"
              alt="Avatar"
            />
          </i>
          <span>
            <a
              href="#"
              className="font-medium text-gray-500 hover:text-blue-500"
            >
              Yoan Almedia
            </a>{" "}
            moved{" "}
            <a
              href="#"
              className="font-medium text-gray-500 hover:text-blue-500"
            >
              Eric Lubin
            </a>{" "}
            to{" "}
            <a
              href="#"
              className="font-medium text-gray-500 hover:text-blue-500"
            >
              📚 Technical Test
            </a>{" "}
            on <time dateTime="2021-01-20">Jan 20, 2021</time>
          </span>
        </div>
      </li>
    </ol>
  );
};

export default Timeline;
