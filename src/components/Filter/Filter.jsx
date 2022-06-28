import { Component } from "react";

import PropTypes from "prop-types";
import s from "./filter.module.css";
class Filter extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <label className={s.label}>
        Find contacts by name
        <input
          onChange={onChange}
          className={s.input}
          placeholder="enter name"
          type="text"
          name="filter"
        />
      </label>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
