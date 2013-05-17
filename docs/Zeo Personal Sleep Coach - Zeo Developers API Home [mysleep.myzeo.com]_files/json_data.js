var json_example1 = {"response":{"@versionBuild":"1.0.0054","@versionApi":"v1","@rspId":"0","@reqId":"0","name":"getSleepStatsByDateRange","sleepRecords":""}};

var json_getOverallAverageZQScore = {"response":{"@versionBuild":"1.0.0054","@versionApi":"v1","@status":"0","@rspId":"0","@reqId":"0","name":"getOverallAverageZQScore","value":79}};

var json_getOverallAverageDayFeelScore = {"response":{"@versionBuild":"1.0.0054","@versionApi":"v1","@status":"0","@rspId":"0","@reqId":"0","name":"getOverallAverageDayFeelScore","value":3}};

var json_getOverallAverageMorningFeelScore = {"response":{"@versionBuild":"1.0.0054","@versionApi":"v1","@status":"0","@rspId":"0","@reqId":"0","name":"getOverallAverageMorningFeelScore","value":3}};

var json_getOverallAverageSleepStealerScore = {"response":{"@versionBuild":"1.0.0054","@versionApi":"v1","@status":"0","@rspId":"0","@reqId":"0","name":"getOverallAverageSleepStealerScore","value":3}};

var json_getAllDatesWithSleepData = {"response":{"@versionBuild":"1.0.0054","@versionApi":"v1","@status":"0","@rspId":"0","@reqId":"0","name":"getAllDatesWithSleepData","dateList":{"date":[{"day":21,"month":11,"year":2009},{"day":22,"month":11,"year":2009},{"day":24,"month":11,"year":2009},{"day":2,"month":12,"year":2009},{"day":14,"month":3,"year":2010},{"day":15,"month":3,"year":2010}]}}}

var json_getLatestSleepStats = {"response":{"@versionBuild":"1.0.0054","@versionApi":"v1","@status":"0","@rspId":"0","@reqId":"0","name":"getLatestSleepStats","sleepStats":{"awakenings":0,"awakeningsZqPoints":0,"bedTime":{"day":15,"hour":22,"minute":36,"month":3,"second":1,"year":2010},"grouping":"DAILY","morningFeel":0,"riseTime":{"day":16,"hour":7,"minute":0,"month":3,"second":0,"year":2010},"startDate":{"day":15,"month":3,"year":2010},"timeInDeep":32,"timeInDeepPercentage":6,"timeInDeepZqPoints":12,"timeInLight":296,"timeInLightPercentage":60,"timeInRem":175,"timeInRemPercentage":34,"timeInRemZqPoints":12,"timeInWake":0,"timeInWakePercentage":0,"timeInWakeZqPoints":0,"timeToZ":1,"totalZ":502,"totalZZqPoints":71,"zq":90}}}

var json_getDatesWithSleepDataInRange = {"response":{"@versionBuild":"1.0.0054","@versionApi":"v1","@status":"0","@rspId":"0","@reqId":"0","name":"getDatesWithSleepDataInRange","dateList":{"date":[{"day":14,"month":3,"year":2010},{"day":15,"month":3,"year":2010}]}}}

var json_getSleepStatsForDate = {"response":{"@versionBuild":"1.0.0054","@versionApi":"v1","@status":"0","@rspId":"0","@reqId":"0","name":"getSleepStatsForDate","sleepStats":{"awakenings":1,"awakeningsZqPoints":1,"bedTime":{"day":14,"hour":22,"minute":14,"month":3,"second":17,"year":2010},"grouping":"DAILY","morningFeel":3,"riseTime":{"day":15,"hour":7,"minute":5,"month":3,"second":0,"year":2010},"startDate":{"day":14,"month":3,"year":2010},"timeInDeep":33,"timeInDeepPercentage":6,"timeInDeepZqPoints":11,"timeInLight":341,"timeInLightPercentage":65,"timeInRem":155,"timeInRemPercentage":29,"timeInRemZqPoints":11,"timeInWake":2,"timeInWakePercentage":0,"timeInWakeZqPoints":0,"timeToZ":1,"totalZ":528,"totalZZqPoints":73,"zq":92}}}

var json_getSleepRecordForDate = {"response":{"@versionBuild":"1.0.0054","@versionApi":"v1","@status":"0","@rspId":"0","@reqId":"0","name":"getSleepRecordForDate","sleepRecord":{"awakenings":1,"awakeningsZqPoints":1,"bedTime":{"day":14,"hour":22,"minute":14,"month":3,"second":17,"year":2010},"grouping":"DAILY","morningFeel":3,"riseTime":{"day":15,"hour":7,"minute":5,"month":3,"second":0,"year":2010},"startDate":{"day":14,"month":3,"year":2010},"timeInDeep":33,"timeInDeepPercentage":6,"timeInDeepZqPoints":11,"timeInLight":341,"timeInLightPercentage":65,"timeInRem":155,"timeInRemPercentage":29,"timeInRemZqPoints":11,"timeInWake":2,"timeInWakePercentage":0,"timeInWakeZqPoints":0,"timeToZ":1,"totalZ":528,"totalZZqPoints":73,"zq":92,"alarmReason":"END_OF_WAKE_WINDOW","alarmRingIndex":103,"dayFeel":0,"sleepGraph":["REM","REM","LIGHT","REM","REM","REM","REM","LIGHT","DEEP","DEEP","DEEP","LIGHT","DEEP","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","REM","REM","REM","REM","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","REM","REM","REM","WAKE","WAKE","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","REM","REM","REM","REM","REM","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","REM","REM","REM","REM","REM","REM","REM","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","REM","REM","REM","REM","REM","REM","LIGHT","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED"],"sleepGraphStartTime":{"day":14,"hour":22,"minute":10,"month":3,"second":0,"year":2010},"sleepStealerScore":-1,"wakeWindowEndIndex":0,"wakeWindowShow":false,"wakeWindowStartIndex":0}}}

var json_getPreviousSleepStats = {"response":{"@versionBuild":"1.0.0054","@versionApi":"v1","@status":"0","@rspId":"0","@reqId":"0","name":"getPreviousSleepStats","sleepStats":{"awakenings":0,"awakeningsZqPoints":0,"bedTime":{"day":3,"hour":1,"minute":11,"month":12,"second":32,"year":2009},"grouping":"DAILY","morningFeel":0,"riseTime":{"day":3,"hour":6,"minute":40,"month":12,"second":0,"year":2009},"startDate":{"day":2,"month":12,"year":2009},"timeInDeep":25,"timeInDeepPercentage":10,"timeInDeepZqPoints":5,"timeInLight":150,"timeInLightPercentage":62,"timeInRem":72,"timeInRemPercentage":28,"timeInRemZqPoints":5,"timeInWake":2,"timeInWakePercentage":0,"timeInWakeZqPoints":0,"timeToZ":2,"totalZ":247,"totalZZqPoints":35,"zq":45}}}

var json_getNextSleepStats = {"response":{"@versionBuild":"1.0.0054","@versionApi":"v1","@status":"0","@rspId":"0","@reqId":"0","name":"getNextSleepStats","sleepStats":{"awakenings":0,"awakeningsZqPoints":0,"bedTime":{"day":15,"hour":22,"minute":36,"month":3,"second":1,"year":2010},"grouping":"DAILY","morningFeel":0,"riseTime":{"day":16,"hour":7,"minute":0,"month":3,"second":0,"year":2010},"startDate":{"day":15,"month":3,"year":2010},"timeInDeep":32,"timeInDeepPercentage":6,"timeInDeepZqPoints":12,"timeInLight":296,"timeInLightPercentage":60,"timeInRem":175,"timeInRemPercentage":34,"timeInRemZqPoints":12,"timeInWake":0,"timeInWakePercentage":0,"timeInWakeZqPoints":0,"timeToZ":1,"totalZ":502,"totalZZqPoints":71,"zq":90}}}

var json_getEarliestSleepStats = {"response":{"@versionBuild":"1.0.0054","@versionApi":"v1","@status":"0","@rspId":"0","@reqId":"0","name":"getEarliestSleepStats","sleepStats":{"awakenings":2,"awakeningsZqPoints":1,"bedTime":{"day":21,"hour":23,"minute":9,"month":11,"second":45,"year":2009},"grouping":"DAILY","morningFeel":5,"riseTime":{"day":22,"hour":7,"minute":40,"month":11,"second":0,"year":2009},"startDate":{"day":21,"month":11,"year":2009},"timeInDeep":56,"timeInDeepPercentage":11,"timeInDeepZqPoints":12,"timeInLight":273,"timeInLightPercentage":56,"timeInRem":165,"timeInRemPercentage":32,"timeInRemZqPoints":12,"timeInWake":10,"timeInWakePercentage":1,"timeInWakeZqPoints":-1,"timeToZ":6,"totalZ":493,"totalZZqPoints":67,"zq":91}}}

var json_getPreviousSleepRecord = {"response":{"@versionBuild":"1.0.0054","@versionApi":"v1","@status":"0","@rspId":"0","@reqId":"0","name":"getPreviousSleepRecord","sleepRecord":{"awakenings":0,"awakeningsZqPoints":0,"bedTime":{"day":3,"hour":1,"minute":11,"month":12,"second":32,"year":2009},"grouping":"DAILY","morningFeel":0,"riseTime":{"day":3,"hour":6,"minute":40,"month":12,"second":0,"year":2009},"startDate":{"day":2,"month":12,"year":2009},"timeInDeep":25,"timeInDeepPercentage":10,"timeInDeepZqPoints":5,"timeInLight":150,"timeInLightPercentage":62,"timeInRem":72,"timeInRemPercentage":28,"timeInRemZqPoints":5,"timeInWake":2,"timeInWakePercentage":0,"timeInWakeZqPoints":0,"timeToZ":2,"totalZ":247,"totalZZqPoints":35,"zq":45,"alarmReason":"END_OF_WAKE_WINDOW","alarmRingIndex":72,"dayFeel":0,"sleepGraph":["UNDEFINED","WAKE","REM","LIGHT","LIGHT","LIGHT","DEEP","DEEP","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","REM","REM","REM","REM","REM","DEEP","REM","REM","REM","REM","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","REM","REM","REM","REM","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","REM","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","WAKE","REM","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED"],"sleepGraphStartTime":{"day":3,"hour":1,"minute":5,"month":12,"second":0,"year":2009},"sleepStealerScore":-1,"wakeWindowEndIndex":0,"wakeWindowShow":false,"wakeWindowStartIndex":0}}}

var json_getNextSleepRecord = {"response":{"@versionBuild":"1.0.0054","@versionApi":"v1","@status":"0","@rspId":"0","@reqId":"0","name":"getNextSleepRecord","sleepRecord":{"awakenings":0,"awakeningsZqPoints":0,"bedTime":{"day":15,"hour":22,"minute":36,"month":3,"second":1,"year":2010},"grouping":"DAILY","morningFeel":0,"riseTime":{"day":16,"hour":7,"minute":0,"month":3,"second":0,"year":2010},"startDate":{"day":15,"month":3,"year":2010},"timeInDeep":32,"timeInDeepPercentage":6,"timeInDeepZqPoints":12,"timeInLight":296,"timeInLightPercentage":60,"timeInRem":175,"timeInRemPercentage":34,"timeInRemZqPoints":12,"timeInWake":0,"timeInWakePercentage":0,"timeInWakeZqPoints":0,"timeToZ":1,"totalZ":502,"totalZZqPoints":71,"zq":90,"alarmReason":"END_OF_WAKE_WINDOW","alarmRingIndex":99,"dayFeel":0,"sleepGraph":["UNDEFINED","REM","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","DEEP","DEEP","LIGHT","LIGHT","LIGHT","REM","REM","REM","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","REM","LIGHT","REM","REM","REM","REM","REM","LIGHT","LIGHT","DEEP","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","REM","REM","REM","REM","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","DEEP","LIGHT","LIGHT","LIGHT","LIGHT","REM","REM","REM","REM","REM","REM","REM","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","REM","REM","LIGHT","REM","REM","REM","REM","REM","REM","REM","REM","REM","REM","REM","REM","REM","REM","REM","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED"],"sleepGraphStartTime":{"day":15,"hour":22,"minute":30,"month":3,"second":0,"year":2010},"sleepStealerScore":-1,"wakeWindowEndIndex":0,"wakeWindowShow":false,"wakeWindowStartIndex":0}}}

var json_getEarliestSleepRecord = {"response":{"@versionBuild":"1.0.0054","@versionApi":"v1","@status":"0","@rspId":"0","@reqId":"0","name":"getEarliestSleepRecord","sleepRecord":{"awakenings":2,"awakeningsZqPoints":1,"bedTime":{"day":21,"hour":23,"minute":9,"month":11,"second":45,"year":2009},"grouping":"DAILY","morningFeel":5,"riseTime":{"day":22,"hour":7,"minute":40,"month":11,"second":0,"year":2009},"startDate":{"day":21,"month":11,"year":2009},"timeInDeep":56,"timeInDeepPercentage":11,"timeInDeepZqPoints":12,"timeInLight":273,"timeInLightPercentage":56,"timeInRem":165,"timeInRemPercentage":32,"timeInRemZqPoints":12,"timeInWake":10,"timeInWakePercentage":1,"timeInWakeZqPoints":-1,"timeToZ":6,"totalZ":493,"totalZZqPoints":67,"zq":91,"alarmReason":"NO_ALARM","alarmRingIndex":0,"dayFeel":0,"sleepGraph":["WAKE","WAKE","LIGHT","LIGHT","LIGHT","DEEP","DEEP","DEEP","DEEP","DEEP","DEEP","DEEP","LIGHT","LIGHT","REM","REM","REM","LIGHT","LIGHT","LIGHT","DEEP","DEEP","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","REM","REM","REM","REM","REM","REM","REM","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","REM","REM","WAKE","REM","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","REM","REM","REM","REM","REM","REM","REM","REM","REM","LIGHT","LIGHT","LIGHT","LIGHT","DEEP","LIGHT","LIGHT","REM","REM","REM","REM","REM","REM","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","REM","REM","WAKE","WAKE","REM","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED"],"sleepGraphStartTime":{"day":21,"hour":23,"minute":5,"month":11,"second":0,"year":2009},"sleepStealerScore":-1,"wakeWindowEndIndex":0,"wakeWindowShow":false,"wakeWindowStartIndex":0}}}

var json_getLatestSleepRecord = {"response":{"@versionBuild":"1.0.0054","@versionApi":"v1","@status":"0","@rspId":"0","@reqId":"0","name":"getLatestSleepRecord","sleepRecord":{"awakenings":0,"awakeningsZqPoints":0,"bedTime":{"day":15,"hour":22,"minute":36,"month":3,"second":1,"year":2010},"grouping":"DAILY","morningFeel":0,"riseTime":{"day":16,"hour":7,"minute":0,"month":3,"second":0,"year":2010},"startDate":{"day":15,"month":3,"year":2010},"timeInDeep":32,"timeInDeepPercentage":6,"timeInDeepZqPoints":12,"timeInLight":296,"timeInLightPercentage":60,"timeInRem":175,"timeInRemPercentage":34,"timeInRemZqPoints":12,"timeInWake":0,"timeInWakePercentage":0,"timeInWakeZqPoints":0,"timeToZ":1,"totalZ":502,"totalZZqPoints":71,"zq":90,"alarmReason":"END_OF_WAKE_WINDOW","alarmRingIndex":99,"dayFeel":0,"sleepGraph":["UNDEFINED","REM","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","DEEP","DEEP","LIGHT","LIGHT","LIGHT","REM","REM","REM","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","REM","LIGHT","REM","REM","REM","REM","REM","LIGHT","LIGHT","DEEP","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","REM","REM","REM","REM","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","DEEP","LIGHT","LIGHT","LIGHT","LIGHT","REM","REM","REM","REM","REM","REM","REM","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","LIGHT","REM","REM","LIGHT","REM","REM","REM","REM","REM","REM","REM","REM","REM","REM","REM","REM","REM","REM","REM","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED","UNDEFINED"],"sleepGraphStartTime":{"day":15,"hour":22,"minute":30,"month":3,"second":0,"year":2010},"sleepStealerScore":-1,"wakeWindowEndIndex":0,"wakeWindowShow":false,"wakeWindowStartIndex":0}}}
