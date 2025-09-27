const timeOfDay = function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
  
    if (hours < 12) {
      return "morning";
    } else if (hours >= 12 && hours < 17) {
      return "afternoon";
    } else {
      return "evening";
    }
  };
  
  export default timeOfDay;