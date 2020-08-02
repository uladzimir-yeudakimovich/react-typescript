import React from 'react'

interface ContentProps {
  courses?: {
    name: string;
    exerciseCount: number;
  }[] | null;
}

const Content: React.FC<ContentProps> = ({ courses }) => {
  if (!courses) {
    return null;
  }

  return (
    <div>
      {courses.map((course, i) => (
        <p key={i}>{course.name} {course.exerciseCount}</p>
      ))}
    </div>
  )
}

export default Content
