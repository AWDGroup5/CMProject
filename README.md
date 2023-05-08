# Cardiomyopathy Project

## Areas developed by each Developer
+ Kingsley Ababio
Message board (PostList.vue, PostListItem.vue, SinglePost.vue, MessageBoardView.vue, App.vue -- non-functional)
Sidebar menu (App.vue)
Search menu (Search.vue, SearchView.vue -- no longer used)

+ Mureed Shah
Original login page (SignIn.vue, LoginScreen.view -- original code no longer used)
Original register page (SignUp.vue, RegisterView.vue -- original code no longer used)
RSS feed (RSSFeed.vue, NewsView.vue)
Sidebar menu (App.vue)
Help page (App.vue)

+ Omar Jeylaani
Firestore back-end
Tweaked and fixed original login page (SignIn.vue, LoginScreen.view -- original code no longer used)

+ Steven Shaw
Original RSS feed (RSSFeed.vue, Loading.vue, RssFeedView.vue)
Uniformed styling (All files)
Overhauled / rebuilt login page (SignIn.vue, LoginScreen.vue)
Overhauled / rebuilt register page (SignUp.vue, RegisterView.vue)
Forgotten password page (ForgotPass.vue, ForgottenView.vue)
Logout page (SignOut.vue, LogoutView.vue)
Profile page (ProfilePosts.vue, UserProfile.vue, ProfileView.vue)
Data page (Data.vue, DataUpload.vue, DataView.vue)

## Additional feature
From the brief, it was clear that it wouldn't be just medical professionals that would access this information. Medical students and patients may have accessed this information to understand these conditions more, and any correlation between circumstances. Understanding this data is a big part of the functionality of the app, and beyond the development team, who just don't have a good enough understanding to assist in a meaningful way. To combat this, we thought a message board would fill this gap in understanding -- where practitioners and professionals would have the opportunity to answer any questions, or explain the data, in a more meaningful way.

Obviously, there would be disclaimers to explain that this should not be considered medical advice, nor should a user approach these message boards as an alternative to consulting a medical professional. Regrettably, this functionality was not able to be implemented in time. The framework exists in components, however they are linked to the App.vue file, where none of the functions are correctly called.

The idea was that the most recent messages would display on the home page, to make users aware that the functionality was available to them. This helped users in two ways; non-professionals / academics would immediately be aware that they are able to ask questions of professionals; professionals were able to see, immediately, any questions that they may be able to answer, for users attempting to understand the data they were seeing.

In addition the, now retired, search function would allow users to review messages to see if their question had already been answered. This further extends to allowing users, who require further explanation of the data, to review existing answers in what would become a separate repository of information. This approach allows the application to serve as a more comprehensive source of information.

## Code Reviews
Due to lack of awareness of the requirements around code reviews, as a result of no members of the group adequately reviewing the end of the specification, a formal process was not established. All code reviews were performed informally, where pushes were discussed once commited. Adhoc discussions were had when discussing progress during meetings, and via Discord, when a developer would ask for assistance.

The lack of formality with these reviews can be seen throughout the app, in particularly key areas:
* Large lack of commenting of code, or functionality of particularly complex sections of code
* Code, in places, is not terribly efficient. In areas where the deadline had become quite tight, the main goal was to just get code that would work, rather than code that would work *well*
* Code, in places, does not work. This was particularly apparent during the building of the SignIn / SignUp components, where constant reworks were required, before the whole system was eventually just rebuilt. However, as the deadline grew closer, and this kind of collaboration was no longer as viable, some functionality of the app were just left broken. 
    * While a code review may not have directly assisted with this point, it may have altered the way that we worked. Regular, comprehensive code reviews may have assisted with ensuring that code remained uniform across the app, and ensure a similar style was consistently used. Having a consistent style may have made collaboration easier, since all devs should then have been working in a similar manner. Regrettably, this did not happen
* Code is not uniform, depending on who is building which section of the app