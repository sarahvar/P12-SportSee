// Relié avec le composant Objectifs

export class DataDay {
    constructor(data) {
      this.data = data;
    }
  
    format() {
      return this.data.sessions.map((session) => {
        switch (session.day) {
          case 1:
            return { ...session, day: 'L' };
          case 2:
            return { ...session, day: 'M' };
          case 3:
            return { ...session, day: 'M' };
          case 4:
            return { ...session, day: 'J' };
          case 5:
            return { ...session, day: 'V' };
          case 6:
            return { ...session, day: 'S' };
          case 7:
            return { ...session, day: 'D' };
          default:
            return session;
        }
      });
    }
  }
  