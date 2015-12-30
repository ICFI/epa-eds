# Climate Action: COP21 Lights the Way


## Idea

Our idea was to use EPA's greenhouse gas emissions data from power plants and gathered through the Greenhouse Gas Reporting Program (GHGRP) and show how the Clean Power Plan (CPP) targets contribute to the U.S. meeting our new commitments from the recent COP-21 conference in Paris. The COP-21 agreements were significant and we felt relating them to real data for the average citizen will help explain the complex subject of climate change and how EPA regulations are being used to address it.

### Data
EPA already has a wealth of GHG emissions data from the GHGRP published in the Facility Level Information on GHGs Tool (FLIGHT) system. FLIGHT allows users to navigate the data easily on a map. More importantly, the data is available for download for further analysis and blending with other data sets. EPA readily provides state emissions goals for the CPP through its website. In order to use these data sets within the five day window (see below), we made simplifying assumptions. We used Talend, an open source tool for data manipulation, to:

* aggregate state power plant emission data from FLIGHT for each year starting at 2012 (the baseline year for the CPP), and
* blend in the yearly state target power plant emissions from the CPP through 2030 (the targeted end of the CPP).

Early on, we decided that while we would follow our usual Lean UX practices and limit our development to a single, five-day development sprint. This constraint would focus our product on concepts that could be quickly developed and user tested while allowing the team to work around planned holiday vacations. The five-day limit also forced us to make several scope decisions to ensure we could ship on Day 5. The biggest scope decision was that data would be stored in a JSON file that resulted from our automated conversion process instead of storing it in a live database. This decision freed up the team to focus on UX and plain language concerns instead of data loading, storage, and connection issues.

### Future Changes
We completed testing on Day 5 and saw issues that could be investigated in future sprints. We would also revisit the simplifying assumptions made to ensure that the data being used is internally consistent. For example, we saw some negative reductions (i.e., planned increases in emissions) for a few states. However this is a result of not aligning the GHGRP and CPP data sets given the time constraints. Since the GHGRP now has several years of real data collected, we'd like to add new charts track states trends to examine whether states are on track to meet their 2030 targets. We could also track interim year targets prior to 2030. We could also add information and data to support other initiatives discussed in the U.S. Intended Nationally Determined Contributions as part of COP-21.


## Install

Please reference our [installation documentation](https://github.com/ICFI/EPA-EDS/blob/master/INSTALL.md).
