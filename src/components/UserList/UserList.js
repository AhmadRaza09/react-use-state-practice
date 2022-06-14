import "./UserList.css";

const UserList = (props) => {
  return (
    <div className="user-list">
      <div className="user-list-inner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>

        <h2>{props.name}</h2>
      </div>
      <div className="user-list-inner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <h2>{props.email}</h2>
      </div>
      <div className="user-list-inner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <h2>{props.phone}</h2>
      </div>
    </div>
  );
};

export default UserList;
