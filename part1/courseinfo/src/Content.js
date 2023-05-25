const Content = (props) => {
  return (
    <div>
      <p>
        {props.contents[0].part} {props.contents[0].exercises}
      </p>
      <p>
        {props.contents[1].part} {props.contents[1].exercises}
      </p>
      <p>
        {props.contents[2].part} {props.contents[2].exercises}
      </p>
    </div>
  );
};

export default Content;
