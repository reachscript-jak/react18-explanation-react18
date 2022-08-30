import { useState } from "react";
import { Avatar } from "./Avatar";
import { ReactQuery } from "./ReactQuery";
import { TaskList } from "./TaskList";

export type Task = {
  id: number;
  title: string;
  assignee: string;
}

const member = {
  a: 'A',
  b: 'B',
  c: 'C',
}

const generateDummyTasks = (): Task[] => {
  return Array(10000).fill('').map((_, index) => {
    const addedIndex = index + 1;
    return {
      id: addedIndex,
      title: `タスク${addedIndex}`,
      assignee: addedIndex % 3 === 0 ? member.a : addedIndex % 2 === 0 ? member.b : member.c,
    }
  })
}
const tasks = generateDummyTasks();

const filteringAssignee = (assignee: string) => {
  if (assignee === '') return tasks;
  return tasks.filter((task) => task.assignee === assignee);
}

export const Transition = () => {
  const [selectedAssignee, setSelectedAssignee] = useState<string>('');
  const [taskList, setTaskList] = useState<Task[]>(tasks);
  const [isShowList, setIsShowList] = useState<boolean>(false);

  const onClickAssignee = (assignee: string) => {
    setSelectedAssignee(assignee);
    setTaskList(filteringAssignee(assignee));
  }

  return (
    <div>
      <p>transition</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar isSelected={selectedAssignee === member.a} onClick={onClickAssignee}>{member.a}</Avatar>
        <Avatar isSelected={selectedAssignee === member.b} onClick={onClickAssignee}>{member.b}</Avatar>
        <Avatar isSelected={selectedAssignee === member.c} onClick={onClickAssignee}>{member.c}</Avatar>
      </div>
      <br />
      <button onClick={() => onClickAssignee('')}>リセット</button>
      <br />
      <br />
      <button onClick={() => setIsShowList(!isShowList)}>表示/非表示</button>
      {isShowList && <TaskList taskList={taskList} />}
    </div>
  )
}
