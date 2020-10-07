import React from "react";
// Компонент-пустышка

const PlaceholderComponent = (props) => {
  // eslint-disable-next-line react/prop-types
  const {someProperty} = props;

  return (
    <section className="someClass">
      <p>Some Property = {someProperty}</p>
    </section>
  );
};


export default PlaceholderComponent;
