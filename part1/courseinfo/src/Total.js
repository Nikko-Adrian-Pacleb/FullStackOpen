const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.contents[0].exercises +
          props.contents[1].exercises +
          props.contents[2].exercises}
      </p>
    </div>
  );
};

export default Total;
