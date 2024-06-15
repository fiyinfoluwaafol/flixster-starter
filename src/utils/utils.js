export default function runtimeToHrsMins (runtimeInMins) {
    //Converts from mins to hrs and mins
    const hrs = Math.floor(runtimeInMins / 60);
    const mins = runtimeInMins % 60;
    return `${hrs}h ${mins}m`;
  }
