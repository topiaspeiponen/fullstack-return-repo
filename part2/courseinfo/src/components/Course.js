const Course = (props) => {


    return (
        <>
            <Header course={props.course}/>
            <Content course={props.course} />
            <Total course={props.course} />
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
  
  const Total = (props) => {
    const totalExercises = props.course.parts.reduce(
        (sum, {exercises}) => {
            console.log('Sum and num of total exercises ', sum, exercises)
            return (
                sum + exercises
            )
        }, 0
    )

    return (
      <p>total num of exercises {totalExercises}</p>
    )
  }

export default Course;