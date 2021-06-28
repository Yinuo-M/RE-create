import "./Filter.scss";

export default function Filter(props) {
  return (
    <form className="filter">
      <div className="filter__wrapper">
				<label className="filter__label" htmlFor="sort">
					sort by
				</label>
				<select
					className="filter__sort"
					id="sort"
					value={props.filterCriteria}
					onChange={props.handleChange}
				>
					<option value="latest">latest added</option>
					<option value="earliest">earliest added</option>
					<option value="random">random</option>
				</select>
			</div>
    </form>
  );
}
