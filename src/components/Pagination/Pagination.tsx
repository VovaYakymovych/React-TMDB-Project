import { useAppSelector } from "../../hooks/useAppSelector.ts";
import { MovieActions } from "../../redux/slices/movieSlice.ts";
import { useAppDispatch } from "../../hooks/useAppDispatch.tsx";
import { useSearchParams } from "react-router-dom";
import './Pagination.css'

const Pagination = () => {
    const dispatch = useAppDispatch();
    const { current_page, total_pages } = useAppSelector(
        (state) => state.movieStoreSlice
    )
    const [searchParams, setSearchParams] = useSearchParams()

    const pageCount = total_pages ? (total_pages > 500 ? 500 : total_pages) : 500

    const getPageNumbers = () => {
        const maxPagesToShow = 11
        let startPage = Math.max(1, current_page - 5)
        let endPage = startPage + maxPagesToShow - 1

        if (endPage > pageCount) {
            endPage = pageCount
            startPage = Math.max(1, endPage - maxPagesToShow + 1)
        }

        const pages = []
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i)
        }
        return pages
    };

    const handlePageChange = (page: number) => {
        if (page > 0 && page <= pageCount && page !== current_page) {
            dispatch(MovieActions.setCurrentPage(page))
            searchParams.set("page", page.toString())
            setSearchParams(searchParams)
        }
    };

    const pageNumbers = getPageNumbers()

    return (
        <div className="pagination">
            <button className={'pagination-button-left'}
                onClick={() => handlePageChange(current_page - 1)}
                disabled={current_page === 1}
            >
                &lt;-Prev
            </button>

            {pageNumbers.map((page) => (
                <button className={'pagination-page-button'}
                    key={page}
                    onClick={() => handlePageChange(page)}
                    disabled={page === current_page}
                >
                    {page === current_page ? `${page}` : page}
                </button>
            ))}

            <button className={'pagination-button-right'}
                onClick={() => handlePageChange(current_page + 1)}
                disabled={current_page === pageCount}
            >
                Next-&gt;
            </button>
        </div>
    );
};

export default Pagination;
