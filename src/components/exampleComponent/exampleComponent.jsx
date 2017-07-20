import React, { PropTypes } from "react"
import cls from "./exampleComponent.css"

const ExampleComponent = ({ message }) =>
  <div className={cls.messageWrapper}>
    {message}
  </div>

ExampleComponent.propTypes = {
  message: PropTypes.string,
}

export default ExampleComponent
