// Twitter API Mock JSON 
var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 336,
    followerCount: 144900000,
    subscriptions: 88,
    avatarURL: 'elonmusk.jpg',
    coverPhotoURL: 'elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'Tesla > Rivian > Everyone Else >>> Lucid Motors :)',
            timestamp: '6/10/2023 00:01:20'
        },
        {
            text: 'Dogecoin to the moon!!! xd',
            timestamp: '5/10/2023 18:37:12'
        },
        {
            text: 'Twitter verified, call me Mr. Worldwide.',
            timestamp: '5/09/2023 12:11:51'
        },
        {
            text: 'I hope that even my worst critics remain on Twitter, because that is what free speech means',
            timestamp: '4/24/2023 09:45:20'
        },
        {
            text: 'Elon\'s Musk, the finest fragrance on Earth!',
            timestamp: '4/20/2023 04:20:00'
        },
        {
            text: 'Am considering taking Tesla private at $420. Funding secured.',
            timestamp: '4/10/2023 05:08:43'
        },
        {
            text: 'Tesla stock price is too high imo',
            timestamp: '3/11/2023 10:11:10'
        },
        {
            text: 'Pronouns suck',
            timestamp: '2/14/2023 10:42:30'
        }
    ]
};

var user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 62700000,
    avatarURL: 'billgates.jpg',
    coverPhotoURL: 'billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '6/10/2023 00:01:20'
        },
        {
            text: 'Bill Nye\'s got nothing on me.',
            timestamp: '5/25/2023 18:37:12'
        },
        {
            text: 'In 2023, I read a book every hour.',
            timestamp: '4/09/2023 12:11:51'
        },
        {
            text: 'Brrr! I dumped ice water on my head to raise awareness for ALS.',
            timestamp: '4/01/2023 03:30:10'
        },
        {
            text: 'Hello World.',
            timestamp: '3/15/2023 02:31:40'
        }
    ]
};



// Real code starts here
// Read current website URl search parameters
var queryParams = new URLSearchParams(window.location.search);

// If query is user1, display Elon Musk. Else display Bill Gates by default
if (queryParams.toString() === "user=user1") {
    index = 0;
} else 
    index = 1;

var users = [user1, user2];
var index;



// Set up follower count conversion function here
function formatNumber(number) {
    // Check to see if user is Elon or Bill
    if (number > 100000000) {
        var user = "elon";
    } else 
        var user = "bill";

    // Convert the number to a string
    var numberString = number.toString();
  
    // Extract the first three/four digits
    var firstThreeDigits = numberString.substring(0, 3);
    var firstFourDigits = numberString.substring(0, 4);

    // Insert a decimal point after the second/third digit
    var formattedBigNumber = firstFourDigits.substring(0, 3) + "." + firstFourDigits.substring(3);
    var formattedSmallNumber = firstThreeDigits.substring(0, 2) + "." + firstThreeDigits.substring(2);
  
    // Return 144.9 if Elon or 62.7 if Bill
    if (user === "elon") {
        return formattedBigNumber;
    } else if (user === "bill") {
        return formattedSmallNumber;
    }
}

// Follower count conversion usage here
var formattedNumber = formatNumber(users[index].followerCount);
 


// Convert timestamps to month and day here
function formatTimestamp(timestamp) {
    // Create a new Date object with the timestamp
    var date = new Date(timestamp);
    // Get the month and day
    var month = date.toLocaleString('default', {month: 'short'});
    var day = date.getDate();
    // Combine the month and day into a single string 
    var combined = month + ' ' + day;

    return combined;
}



// Set up back button, and fixed header information tab
var displayName = $(`
                  <div class="header-container">
                        <div class="user-info">
                            <div class="go-back">
                                <i class="gg-arrow-left"></i>
                            </div>
                            <div class="quick-summary">
                                <h1 class="name">${users[index].displayName}</h1>
                                <h5 class="total-tweets">${users[index].tweets.length} Tweets</h5>
                            </div>
                        </div>
                        <div class="image-container">
                            <img src="twitter-verified.jpg">
                        </div>
                  </div>
                  `)
                  .appendTo($("#header")
);

// Set up cover photo
var coverPhoto = $(`
                 <div id="elon-cover" class="background">
                        <img class="click-to-enlarge" src="elonmusk-cover.jpeg">
                 </div>
                 <div id="bill-cover" class="background">
                        <img class="click-to-enlarge" src="billgates-cover.jpeg">
                 </div>
                 `)
                 .appendTo($("#cover")
);

// Set up user summary information
var displayInfo = $(`
                  <div class="avatar">
                        <div class="profile-image">
                            <img class="click-to-enlarge-2" src="${users[index].avatarURL}" alt="Profile Picture">
                        </div>
                        <button class="follow-button">Follow</button>
                  </div>
                  <div class="profile-info">
                        <h1 class="displayName">${users[index].displayName}</h1>
                        <div class="image-container">
                            <img src="twitter-verified.jpg">
                        </div>
                  </div>
                  <h4 class="userName">${users[index].userName}</h4>
                  <div class="bio">
                        <h4>Sharing things I'm learning through my foundation work and other interests.</h4>
                  </div>
                  <div class="additional-information">
                        <div class="calendar-join">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-week" viewBox="0 0 16 16">
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                            </svg>
                            <h3 class="joined">Joined ${users[index].joinedDate}</h3>
                        </div>
                  </div>
                  <div class="following">
                        <h4 class="followingCount">${users[index].followingCount} <span class="extra">Following</span></h4>
                        <h4 class="followerCount">${formattedNumber}M <span class="extra">Followers</span></h4>
                  </div>
                  `)
                  .appendTo($("#details")
);

// Set up tab selector and tweets 
var displayTweets = $(`
                    <div class="tab-container">
                        <button id="btn-tweets" class="tab-btn active" data-tab="tweets">Tweets</button>
                        <button class="tab-btn" data-tab="replies">Replies</button>
                        <button class="tab-btn" data-tab="media">Media</button>
                        <button class="tab-btn" data-tab="likes">Likes</button>
                    </div>

                    <div id="tweets-tab" class="tab-content active" data-tab="tweets"></div>
                    <div class="tab-content" data-tab="replies">
                        <h5 class="dummy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean et tortor at risus viverra adipiscing at. Convallis tellus id interdum velit laoreet. Elementum eu facilisis sed odio morbi. Auctor urna nunc id cursus metus. Tellus mauris a diam maecenas sed enim ut sem. Ornare arcu dui vivamus arcu felis bibendum. Libero nunc consequat interdum varius sit amet mattis. Justo eget magna fermentum iaculis eu non. Feugiat scelerisque varius morbi enim nunc faucibus. Pellentesque diam volutpat commodo sed. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Purus ut faucibus pulvinar elementum integer. Id semper risus in hendrerit gravida. Volutpat est velit egestas dui id ornare.</h5>
                    </div>
                    <div class="tab-content" data-tab="media">
                        <h5 class="dummy">Auctor elit sed vulputate mi sit amet. Nec feugiat in fermentum posuere. Etiam erat velit scelerisque in dictum. Donec ultrices tincidunt arcu non sodales neque sodales ut. Ut sem viverra aliquet eget sit amet. Gravida in fermentum et sollicitudin ac. Integer enim neque volutpat ac tincidunt vitae. Neque egestas congue quisque egestas. Elementum nibh tellus molestie nunc. Proin libero nunc consequat interdum varius sit amet mattis vulputate. Aliquet risus feugiat in ante metus dictum.</h5>
                    </div>
                    <div class="tab-content" data-tab="likes">
                        <h5 class="dummy">Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Interdum velit laoreet id donec. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Fusce ut placerat orci nulla. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Risus pretium quam vulputate dignissim suspendisse in est. Adipiscing elit pellentesque habitant morbi tristique senectus. Pharetra massa massa ultricies mi. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Magna eget est lorem ipsum dolor. In nisl nisi scelerisque eu ultrices. Sit amet justo donec enim diam. Faucibus et molestie ac feugiat.</h5>
                    </div>
                    `)
                    .appendTo($("#tweets")
);



// Different details between Elon and Bill
if (index === 0) {
    // Elon added the twitter symbol next to his name
    $(`
    <img src="twitter-symbol.jpg">
    `)
    .appendTo($(".image-container"));
    // Elon has a smaller profile, so adapt details and tweets sections 
    $("#details").css('height', '200px');
    $("#tweets").css('margin-top', '485px');
    // Elon has a subscriptions section in his follower information
    $(`
    <h4 class="subscriptions">${users[index].subscriptions} <span class="extra">Subscriptions</span></h4>
    `)
    .appendTo($(".following"));
    // Elon has a planets cover photo
    $("#elon-cover").removeClass("hidden");
    $("#bill-cover").addClass("hidden");
    // Remove Bill Gates bio line, location, and blog link
    $(".bio").addClass("hidden");
    $(`
    <div class="location">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        </svg>
        <a class="home" href="https://www.google.com/maps/search/?api=1&query=Seattle,WA" target="_blank">Seattle, WA</a>
    </div>
    <div class="blog">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
        </svg>
        <a class="notes" href="https://www.gatesnotes.com/?WT.mc_id=20200000000000_Blog_BG-TW_&WT.tsrc=BGTW" target="_blank">gatesnot.es/blog</a>
    </div>
    `)
    .remove($(".additional-information"));
} else if (index === 1) {
    // Bill does not have the twitter symbol next to his name
    $(`
    <img src="twitter-symbol.jpg">
    `)
    .remove($(".image-container"));
     // Bill has a bigger profile, so adapt details and tweets sections
     $("#details").css('height', '230px');
     $("#tweets").css('margin-top', '520px');
    // Bill does not a subscriptions section in his follower information
    $(`
    <h4 class="subscriptions">${users[index].subscriptions} <span class="extra">Subscriptions</span></h4>
    `)
    .remove($(".following"));
    // Bill has a community cover photo
    $("#bill-cover").removeClass("hidden");
    $("#elon-cover").addClass("hidden");
    // Add Bill Gates bio line, location, and blog link
    $(".bio").removeClass("hidden");
    $(`
    <div class="location">
        <a href="https://www.google.com/maps/search/?api=1&query=Seattle,WA" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
        </a>
        <a class="home" href="https://www.google.com/maps/search/?api=1&query=Seattle,WA" target="_blank">Seattle, WA</a>
    </div>
    <div class="blog">
        <a href="https://www.gatesnotes.com/?WT.mc_id=20200000000000_Blog_BG-TW_&WT.tsrc=BGTW" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
            </svg>
        </a>
        <a class="notes" href="https://www.gatesnotes.com/?WT.mc_id=20200000000000_Blog_BG-TW_&WT.tsrc=BGTW" target="_blank">gatesnot.es/blog</a>
    </div>
    `)
    .prependTo($(".additional-information"));
}
                       

// Set up click to enlarge image and then revert back to original size logic here
document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".click-to-enlarge");
                      
    images.forEach(function(image) {
        image.addEventListener("click", function() {
            this.classList.toggle("enlarged");
            document.body.classList.toggle("modal-open");
        });
    });
                      
    document.addEventListener("click", function(event) {
        if (!event.target.classList.contains("click-to-enlarge")) {
            images.forEach(function(image) {
                image.classList.remove("enlarged");
            });
            document.body.classList.remove("modal-open");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".click-to-enlarge-2");
                      
    images.forEach(function(image) {
        image.addEventListener("click", function() {
            this.classList.toggle("enlarged");
            document.body.classList.toggle("modal-open");
        });
    });
                      
    document.addEventListener("click", function(event) {
        if (!event.target.classList.contains("click-to-enlarge-2")) {
            images.forEach(function(image) {
                image.classList.remove("enlarged");
            });
            document.body.classList.remove("modal-open");
        }
    });
});



// Set up follow/unfollow button here
$(document).ready(function() {
    $(".follow-button").click(function() {
        var buttonText = $(this).text();
        if (buttonText === "Follow") {
            $(this).text("Following").css({'color':'white', 'background-color':'rgb(0, 0, 0)', 'border-color':'rgb(83, 100, 113', 'width':'105px'});
        } else if (buttonText === "Unfollow" || buttonText === "Following") {
            $(this).text("Follow").css({'color':'rgb(15, 20, 25)', 'background-color':'rgb(244, 239, 240)', 'border-color':'rgba(0, 0, 0, 0)', 'width':'82px'});
        }
    })
});

// Set up unfollow hover logic here
$(".follow-button").hover(
    function() {
        if ($(this).text() === "Following") {
            $(this).text("Unfollow").css({'color':'red', 'background-color':'rgba(39, 0, 0, 0.8)', 'border-color':'red'});
        }
    },
    function() {
        if ($(this).text() === "Unfollow") {
            $(this).text("Following").css({'color':'white', 'background-color':'rgb(0, 0, 0)', 'border-color':'rgb(83, 100, 113'});           
        } 
    }
);



// Set up back button to switch between users logic here
$(document).ready(function() {
    $(".go-back").click(function() {
        // Get the current URL
        var url = new URL(window.location.href);
        // Get query parameters from current URL
        var params = new URLSearchParams(url.search);
        // If currently on Elon, change to Bill
        if (index === 0) {
            params.set("user", "user2");
        // If currently on Bill, change to Elon
        } else if (index === 1) {
            params.set("user", "user1");
        }
        url.search = params.toString();
        window.location.href = url.toString();
    })
});

  

// Set up tab selector logic here
$(document).ready(function() {
    $('.tab-btn').click(function() {
      // Get the data-tab value of the clicked tab button
      var tab = $(this).data('tab');
  
      // Remove the "active" class from all tab buttons
      $('.tab-btn').removeClass('active');
  
      // Add the "active" class to the clicked tab button
      $(this).addClass('active');
  
      // Hide all tab contents
      $('.tab-content').hide();
  
      // Show the corresponding tab content
      $('.tab-content[data-tab="' + tab + '"]').show();
    });
});
  

  
// Filter timestamps and display tweets here
for (var i = 0; i < users[index].tweets.length; i++) {
    var formattedTimestamps = [];
    formattedTimestamps[i] = formatTimestamp(users[index].tweets[i].timestamp);

    $(`
    <div class="tweet-bar">
        <div class="mini-profile-image">
            <img class="click-to-enlarge-2 small-image" src="${users[index].avatarURL}">
        </div>
        <div class="tweet-content">
            <div class="mini-profile-info">
                <h3 class="mini-displayName">${users[index].displayName}</h3>
                <div class="mini-image-container">
                    <img src="twitter-verified.jpg">
                </div>
                <h4 class="mini-userName">${users[index].userName} • ${formattedTimestamps[i]}</h4>
            </div>
            <h5 class="tweet-text">${users[index].tweets[i].text}</h5>
        </div>
    </div>
    <div class="react-bar">
        <div class="reply-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
            </svg>
        </div>
        <div class="retweet-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-repeat" viewBox="0 0 16 16">
                <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"/>
            </svg>
        </div>
        <div class="like-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
        </div>
        <div class="share-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
            </svg>
        </div>
    </div>
    `)
    .appendTo('#tweets-tab');
} 

// Add twitter symbol next to Elon name for each tweet
if (index === 0) {
    $(`
    <img class="mini-twitter-symbol" src="twitter-symbol.jpg">
    `)
    .appendTo('.mini-image-container');
}

// Like/Unlike button logic here
$(document).ready(function() {
    var isOldSVG = true;

    $('.like-icon').click(function() {
        if (isOldSVG) {
            var newSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">' +
            '<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>' +
            '</svg>';

            $(this).html(newSVG);
        } else {
            var oldSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">' +
            '<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>' +
            '</svg>';

            $(this).html(oldSVG);
        }

        isOldSVG = !isOldSVG;
    });
});

// Copy web link to keyboard logic here
$(document).ready(function() {
    $('.share-icon').click(function() {
      var websiteLink = window.location.href;
      
      // Copy website link to clipboard
      navigator.clipboard.writeText(websiteLink).then(function() {
        // Show notification
        showNotification('Website link copied to clipboard');
      }).catch(function() {
        // Handle error
        showNotification('Failed to copy website link to clipboard');
      });
    });
  
    // Function to display notification
    function showNotification(message) {
      toastr.success(message);
    }
});
  
  


