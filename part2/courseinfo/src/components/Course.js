const Course = (props) => {


    return (
        <>
            <Header course={props.course}/>
            <Content course={props.course} />
            
        </>
    )
};

const Header = (props) => {
    return (
      <h1>{props.course.name}</h1>
    )
  }
  
  const Content = (props) => {
    return (
      <div>
        {props.course.parts.map(part => 
            <Part key={part.id} part={part.name} exercises={part.exercises}/>
        )}
      </div>
    )
  }
  
  const Part = (props) => {
    return (
      <p>
          {props.part} {props.exercises}
      </p>
    )
  }
  
  /*const Total = (props) => {
    return (
      <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    )
  }*/

export default Course;