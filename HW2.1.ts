class School {
  directions: any = [];

  addDirection(direction: any): void  {
    this.directions.push(direction);
  }
}

class Direction {
  private _name: any;
  levels: any = [];

  get name(): any {
    return this._name;
  }

  constructor(name: any) {
    this._name = name;
  }

  addLevel(level: any): void {
    this.levels.push(level);
  }
}


class Level {
  groups: any = [];
  private _program: any;
  private _name: any;

  constructor(name: any, program: any) {
    this._name = name;
    this._program = program;
  }

  get name(): any {
    return this._name;
  }

  get program(): any {
    return this._program;
  }

  addGroup(group: any): void {
    this.groups.push(group);
  }
}

class Group {
  private _students: any = [];
  private _directionName: any;
  private _levelName: any;

  get students(): any {
    return this._students;
  }

  constructor(directionName: any, levelName: any) {
    this._directionName = directionName;
    this._levelName = levelName;
  }

  addStudent(student: any): void {
    this._students.push(student);
  }

  showPerformance(): any {
    const sortedStudents = this.students.toSorted(
      (a: any, b: any) => b.getPerformanceRating() - a.getPerformanceRating()
    );

    return sortedStudents;
  }
}

class Student {
  grades: any = {};
  attendance: any = [];

  private firstName: any;
  private lastName: any;
  private birthYear: any;

  constructor(firstName: any, lastName: any, birthYear: any) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  get fullName(): any {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value: any) {
    [this.lastName, this.firstName] = value.split(" ");
  }

  get age(): any {
    return new Date().getFullYear() - this.birthYear;
  }

  setGrade(subject: any, grade: any): void {
    this.grades[subject] = grade;
  }

  markAttendance(present: any): void {
    this.attendance.push(present);
  }

  getPerformanceRating(): any {
    const gradeValues: any = Object.values(this.grades);

    if (gradeValues.length === 0) return 0;

    const averageGrade =
      gradeValues.reduce((sum: any, grade: any) => sum + grade, 0) / gradeValues.length;

    const attendancePercentage =
      (this.attendance.filter((present: any) => present).length /
        this.attendance.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}