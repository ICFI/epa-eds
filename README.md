# Climate Action: COP21 Lights the Way


## Idea

Our idea was to use EPA's data on greenhouse gas reporting from power plants and show how the Clean Power Plan (CPP) targets can help the U.S. meet our new commitments from the recent COP-21 conference in Paris. The COP-21 agreements were significant and we felt relating them to real data for the average citizen will help explain the complex subject of climate change.

### Data
EPA already has a wealth of data from the Greenhouse Gas Reporting Program (GHGRP) stored in the Facility Level Information on GHGs Tool (FLIGHT) system. FLIGHT allows users to navigate the data easily on a map. More importantly, the data is available for download for further analysis and blending with other data sets. We used Talend, an open source tool for data manipulation, to:

* aggregate state power plant emission data from FLIGHT for each year starting at 2012 (the baseline year for the CPP)
* blend in the yearly state target power plant emissions from the CPP through 2030 (the targeted end of the CPP)

Early on, we decided that while we would follow our usual Lean UX practices and limit our development to a single, five-day development sprint. This constraint would focus our product on concepts that could be quickly developed and user tested while allowing the team to work around planned holiday vacations. The five-day limit also forced us to make several scope decisions to ensure we could ship on Day 5. The biggest scope decision was that data would be stored in a JSON file that resulted from our automated conversion process instead of storing it in a live database. This decision freed up the team to focus on UX and plain language concerns instead of data loading, storage, and connection issues.

### Future Changes
We completed testing on Day 5 and saw issues that could be investigated in future sprints. We knew from the data that some states did not have CPP commitments but expected most states to have reductions by 2030. We coded the application to account for this data but saw some negative reductions (planned increases in emissions) for a few states. In a future sprint, we could investigate and verify these negative reductions. We could also compare the results of our reduction analysis to other independent sources. Since the GHGRP now has several years of real data collected, we'd like to add new charts to show projections of real data through 2030.


## Install

Please reference our [installation documentation](https://github.com/ICFI/EPA-EDS/blob/master/INSTALL.md).
