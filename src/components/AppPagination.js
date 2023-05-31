import React from "react";

export default function AppPagination({ pageNumber, setPage }) {
  const array = Array.from(Array(pageNumber).keys());
  console.log(array);
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          {array?.map((page) => (
            <li key={page} className="page-item">
              <button onClick={(e) => setPage(e.target.textContent)} className="page-link">
                {++page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
