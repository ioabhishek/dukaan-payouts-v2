import { Icons } from "../Icons"
import "../../styles/pagination.css"

const Pagination = () => {
  return (
    <div className="pnbtn_wrap">
      <button className="pn_btn prev">
        <Icons.prev />
        Previous
      </button>
      <div className="pgnbtn_wrap">
        <button className="pgn_btn">1</button>
        <button className="pgn_btn">...</button>
        <button className="pgn_btn active">10</button>
        <button className="pgn_btn">11</button>
        <button className="pgn_btn">12</button>
        <button className="pgn_btn">13</button>
        <button className="pgn_btn">14</button>
        <button className="pgn_btn">15</button>
        <button className="pgn_btn">16</button>
        <button className="pgn_btn">17</button>
        <button className="pgn_btn">18</button>
      </div>
      <button className="pn_btn next">
        Next
        <Icons.next />
      </button>
    </div>
  )
}

export default Pagination
