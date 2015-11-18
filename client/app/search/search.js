angular.module('movieApp.search', [])
  .controller('SearchCtrl', function ($scope, $http, Movies){
    $scope.searchString = '';
    $scope.movies = Movies.movies;
    $scope.tasteKid = Movies.tasteKid;
    $scope.logger = function() {
      console.log($scope.searchString);
    };
    $scope.renderMovies = function() {

    };
    $scope.grabMovies = function() {
      var tastekid = "https://www.tastekid.com/api/similar?q=pulp+fiction&k=178458-na-U9R8JJIW";
      var omdb = "http://www.omdbapi.com/?t=" + $scope.searchString + "&y=&plot=short&r=json";
        $http({
        method: 'GET',
        url: omdb,
              }).then(function successCallback(response) {
                $scope.movies.push(response.data.Title);
                console.log(response.data);
                console.log($scope.movies, 'this is the movies array');
                console.log($scope.tasteKid, 'this is the tastekid array');
              }, function errorCallback(response) {
                console.log('error');
                console.log(response);
        });
    };
  })
  .factory('Movies', function() {
    var movies = [];
    var watchList = [];
    var tasteKid = {"Similar": {"Info": [{"Name": "Pulp Fiction", "Type": "movie", "wTeaser": "Pulp Fiction is a 1994 American black comedy crime film written and directed by Quentin Tarantino, from a story by Tarantino and Roger Avary. The film is known for its eclectic dialogue, ironic mix of humor and violence, nonlinear storyline, and a host of cinematic allusions and pop culture references. The film was nominated for seven Oscars, including Best Picture; Tarantino and Avary won for Best Original Screenplay. It was also awarded the Palme d'Or at the 1994 Cannes Film Festival. A major critical and commercial success, it revitalized the career of its leading man, John Travolta, who received an Academy Award nomination, as did co-stars Samuel L. Jackson and Uma Thurman.Directed in a highly stylized manner, Pulp Fiction connects the intersecting storylines of Los Angeles mobsters, fringe players, small-time criminals, and a mysterious briefcase. Considerable screen time is devoted to monologues and casual conversations that reveal the characters' senses of humor and perspectives on life. The film's title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue. Pulp Fiction is self-referential from its opening moments, beginning with a title card that gives two dictionary definitions of \"pulp\". The plot, as in many of Tarantino's other works, is presented out of chronological sequence.", "wUrl": "http://en.wikipedia.org/wiki/Pulp_Fiction_(movie)", "yUrl": "https://www.youtube-nocookie.com/embed/s7EdQ4FqbhY", "yID": "s7EdQ4FqbhY"}], "Results": [{"Name": "Reservoir Dogs", "Type": "movie", "wTeaser": "Reservoir Dogs is a 1992 American neo-noir black comedy crime thriller that depicts the events before and after a botched diamond heist. The film was the debut of director and writer Quentin Tarantino, and stars Harvey Keitel, Tim Roth, Steve Buscemi, Chris Penn, Lawrence Tierney, and Michael Madsen. Tarantino and criminal-turned-author Edward Bunker have minor roles. It incorporates many themes that have become Tarantino's hallmarks\u2014violent crime, pop culture references, profanity, and a nonlinear storyline.The film has become a classic of independent film and a cult hit. It was named \"Greatest Independent Film of all Time\" by Empire magazine. Reservoir Dogs was generally well received, and the cast was praised by many critics. Although it was not given much promotion upon release, the film became a modest success in the United States after grossing $2,832,029, recouping its $1.2 million budget. The film was more successful in the United Kingdom, grossing nearly \u00a36.5 million, and it achieved higher popularity after the success of Tarantino's next directorial effort, Pulp Fiction. A soundtrack titled Reservoir Dogs: The Original Motion Picture Soundtrack was released featuring songs used in the film, which are mostly from the 1970s.", "wUrl": "http://en.wikipedia.org/wiki/Reservoir_Dogs", "yUrl": "https://www.youtube-nocookie.com/embed/vayksn4Y93A", "yID": "vayksn4Y93A"}, {"Name": "Kill Bill", "Type": "movie", "wTeaser": "Kill Bill is an American two-part martial arts film written and directed by Quentin Tarantino. It was originally scheduled for a single theatrical release, but with a running time of over four hours, it was separated into two films: Kill Bill: Volume 1, released in late 2003, and Kill Bill: Volume 2, released in early 2004. A third installment was planned for the year 2014, but in a 2012 interview from Tarantino, concerning Kill Bill: Volume 3, he remarked, \"We'll see, probably not though.\" In 2015, however, Tarantino said he and Uma Thurman are considering it.Kill Bill: Volume 1 was released in theaters on October 10, 2003. In the United States and Canada, Volume 1 was released in 3,102 theaters and grossed $22 million on its opening weekend. Volume 1 was the widest theatrical release of Tarantino's career to date, and it was also his highest-grossing opening weekend to date. Outside the United States and Canada, Kill Bill: Volume 1 was released in 20 territories. By November 2, 2003, it had made $31 million in the 20 territories. Kill Bill: Volume 1 grossed a total of $70 million in the United States and Canada and $110.9 million in other territories for a worldwide total of $180.9 million.", "wUrl": "http://en.wikipedia.org/wiki/Kill_Bill", "yUrl": "https://www.youtube-nocookie.com/embed/7kSuas6mRpk", "yID": "7kSuas6mRpk"}, {"Name": "Death Proof", "Type": "movie", "wTeaser": "Death Proof is a 2007 American action\u2013exploitation horror film written and directed by Quentin Tarantino. The film centers on a psychopathic stunt man, played by Kurt Russell, who stalks young women before murdering them in staged car accidents using his \"death-proof\" stunt car.The film pays homage to the exploitation and muscle cars genres of the 1970s, and also stars Rosario Dawson, Vanessa Ferlito, Jordan Ladd, Rose McGowan, Sydney Tamiia Poitier, Tracie Thoms and Mary Elizabeth Winstead, with Zo\u00eb Bell as herself.Death Proof was released theatrically in the United States as part of a double feature with Robert Rodriguez\u2019s Planet Terror under the collective title Grindhouse, in order to replicate the experience of viewing exploitation film double features in a \"grindhouse\" theater. The films were released separately outside the United States and on DVD, with Death Proof going on sale in the U.S. on September 18, 2007. The film was in the main competition for the Palme d'Or at the 2007 Cannes Film Festival.", "wUrl": "http://en.wikipedia.org/wiki/Death_Proof", "yUrl": "https://www.youtube-nocookie.com/embed/7mICGcg5-pM", "yID": "7mICGcg5-pM"}, {"Name": "Inglourious Basterds", "Type": "movie", "wTeaser": "Inglourious Basterds is a 2009 American war film written and directed by Quentin Tarantino and starring Brad Pitt, Christoph Waltz, Diane Kruger, Michael Fassbender and Eli Roth. The film tells the fictional alternate history story of two plots to assassinate Nazi Germany's political leadership, one planned by a young French Jewish cinema proprietor, and the other by a team of Jewish-American soldiers led by First Lieutenant Aldo Raine. The film's title was inspired by director Enzo G. Castellari's macaroni combat film, The Inglorious Bastards (1978).Tarantino wrote the script in 1998 but struggled with the ending and chose to hold off filming and instead direct the two-part film Kill Bill. After directing Death Proof in 2007 (as part of the double feature Grindhouse), Tarantino returned to work on Inglourious Basterds. A co-production of the United States and Germany, the film began principal photography in October 2008 and was filmed in Germany and France with a $70 million production budget. Inglourious Basterds premiered on May 20, 2009, at the 62nd Cannes Film Festival. It was widely released in theaters in the United States and Europe in August 2009 by The Weinstein Company and Universal Pictures.", "wUrl": "http://en.wikipedia.org/wiki/Inglourious_Basterds", "yUrl": "https://www.youtube-nocookie.com/embed/KnrRy6kSFF0", "yID": "KnrRy6kSFF0"}, {"Name": "Jackie Brown", "Type": "movie", "wTeaser": "Jackie Brown is a 1997 crime thriller film written, produced and directed by Quentin Tarantino. It is an adaptation of Elmore Leonard's 1992 novel Rum Punch. It's the first adaptation from Tarantino and stars Pam Grier in the title role. The film pays homage to 1970s blaxploitation films, particularly the films Coffy (1973) and Foxy Brown (1974), both of which also starred Grier in the title roles.The film's supporting cast includes Robert Forster, Robert De Niro, Samuel L. Jackson, Bridget Fonda and Michael Keaton. It was Tarantino's third film following his successes with Reservoir Dogs (1992) and Pulp Fiction (1994).Grier and Forster were both veteran actors but neither had performed a leading role in many years. Jackie Brown revitalized both actors' careers. The film garnered Forster an Academy Award nomination for Best Supporting Actor, and Golden Globe Award nominations for Jackson and Grier.", "wUrl": "http://en.wikipedia.org/wiki/Jackie_Brown_(film)", "yUrl": "https://www.youtube-nocookie.com/embed/G7HkBDNZV7s", "yID": "G7HkBDNZV7s"}, {"Name": "Full Metal Jacket", "Type": "movie", "wTeaser": "Full Metal Jacket is a 1987 war film directed and produced by Stanley Kubrick. The screenplay by Kubrick, Michael Herr, and Gustav Hasford was based on Hasford's novel The Short-Timers (1979). The film stars Matthew Modine, Adam Baldwin, Vincent D'Onofrio, R. Lee Ermey, Dorian Harewood, Arliss Howard, Kevyn Major Howard, and Ed O'Ross, and its storyline follows a platoon of U.S. Marines through their training and the experiences of two of the platoon's Marines in the Tet Offensive during the Vietnam War. The film's title refers to the full metal jacket bullet used by infantry riflemen. The film was released in the United States on June 26, 1987.The film received critical acclaim and an Academy Award nomination for Best Adapted Screenplay for Kubrick, Herr, and Hasford. In 2001, the American Film Institute placed Full Metal Jacket at No. 95 in their \"AFI's 100 Years...100 Thrills\" poll.", "wUrl": "http://en.wikipedia.org/wiki/Full_Metal_Jacket", "yUrl": "https://www.youtube-nocookie.com/embed/x9f6JaaX7Wg", "yID": "x9f6JaaX7Wg"}, {"Name": "Goodfellas", "Type": "movie", "wTeaser": "Goodfellas (stylized as GoodFellas) is a 1990 American crime film directed by Martin Scorsese. It is a film adaptation of the 1986 non-fiction book Wiseguy by Nicholas Pileggi, who co-wrote the screenplay with Scorsese. The film narrates the rise and fall of Lucchese crime family associate Henry Hill (the first-person narrator in the film) and his friends over a period from 1955 to 1980.Scorsese initially named the film Wise Guy and postponed making it; later, he and Pileggi changed the name to Goodfellas. To prepare for their roles in the film, Robert De Niro, Joe Pesci, and Ray Liotta often spoke with Pileggi, who shared research material left over from writing the book. According to Pesci, improvisation and ad-libbing came out of rehearsals wherein Scorsese gave the actors freedom to do whatever they wanted. The director made transcripts of these sessions, took the lines he liked best, and put them into a revised script the cast worked from during principal photography.", "wUrl": "http://en.wikipedia.org/wiki/Goodfellas", "yUrl": "https://www.youtube-nocookie.com/embed/qo5jJpHtI1Y", "yID": "qo5jJpHtI1Y"}, {"Name": "From Dusk Till Dawn", "Type": "movie", "wTeaser": "From Dusk Till Dawn is a 1996 American black comedy horror-themed crime film directed by Robert Rodriguez and written by Quentin Tarantino. It stars George Clooney, Tarantino, Harvey Keitel and Juliette Lewis. After enjoying modest success at the box office, it has since become a cult film.Two brothers, Seth and Richard \"Richie\" Gecko, having just robbed a bank, stop at a liquor store to pick up a map. When the arrival of Texas Ranger Earl McGraw threatens their getaway, they kill him and the cashier, burning down the store in the process. During the gunfight, Richie is shot in the hand. Fleeing a combined force of FBI and local police, they head towards Mexico where a contact has arranged a safe-house for them. Along the way they stop at a motel and unload a bank teller whom they are holding hostage. While Seth goes out to \"sight see\" checking on the border and to buy fast food burgers, Richie brutally rapes and murders the teller. Seth, who pictures himself as a professional thief, becomes furious over Richie's sadistic behavior.", "wUrl": "http://en.wikipedia.org/wiki/From_Dusk_till_Dawn", "yUrl": "https://www.youtube-nocookie.com/embed/-bBay_1dKK8", "yID": "-bBay_1dKK8"}, {"Name": "Sin City", "Type": "movie", "wTeaser": "Sin City (also known as Frank Miller's Sin City) is a 2005 American neo-noir crime thriller anthology film written, produced, and directed by Frank Miller and Robert Rodriguez. It is based on Miller's graphic novel Sin City.Much of the film is based on the first, third and fourth books in Miller's original comic series. The Hard Goodbye is about a man who embarks on a brutal rampage in search of his one-time sweetheart's killer, killing anyone, even the police, that gets in his way of finding and killing her murderer. The Big Fat Kill focuses on an everyman getting caught in a street war between a group of prostitutes and a group of mercenaries, the police and the mob. That Yellow Bastard follows an aging police officer who protects a young woman from a grotesquely disfigured serial killer. The intro and outro of the film are based on the short story \"The Customer is Always Right\", which is collected in Booze, Broads & Bullets, the sixth book in the comic series.", "wUrl": "http://en.wikipedia.org/wiki/Sin_City_(film)", "yUrl": "https://www.youtube-nocookie.com/embed/T2Dj6ktPU5c", "yID": "T2Dj6ktPU5c"}, {"Name": "The Big Lebowski", "Type": "movie", "wTeaser": "The Big Lebowski is a 1998 American crime comedy film with neo-noir elements, written, produced, and directed by Joel and Ethan Coen. It stars Jeff Bridges as Jeffrey \"The Dude\" Lebowski, an unemployed Los Angeles slacker and avid bowler. After he becomes the victim in a case of mistaken identity, The Dude finds a millionaire also named Jeffrey Lebowski who was the intended victim. When the millionaire Lebowski's trophy wife is kidnapped, he commissions The Dude to deliver the ransom to secure her release. The plan goes awry when the Dude's friend Walter Sobchak (John Goodman) schemes to keep the full ransom. Julianne Moore and Steve Buscemi also star, with David Huddleston, John Turturro, Philip Seymour Hoffman, Sam Elliott and Tara Reid appearing in supporting roles.", "wUrl": "http://en.wikipedia.org/wiki/The_Big_Lebowski", "yUrl": "https://www.youtube-nocookie.com/embed/cd-go0oBF4Y", "yID": "cd-go0oBF4Y"}, {"Name": "Taxi Driver", "Type": "movie", "wTeaser": "Taxi Driver is a 1976 American vigilante film with neo-noir and psychological thriller elements, directed by Martin Scorsese and written by Paul Schrader. The film stars Robert De Niro as a disturbed loner, driven to madness and violence with his inability to connect with his environment. The film is set in New York City following the Vietnam War, and also features Jodie Foster, Harvey Keitel, Cybill Shepherd, Peter Boyle, and Albert Brooks.The film is regularly cited by critics, film directors, and audiences alike as one of the greatest films of all time. Nominated for four Academy Awards, including Best Picture, it won the Palme d'Or at the 1976 Cannes Film Festival. The American Film Institute ranked Taxi Driver as the 52nd-greatest American film on its AFI's 100 Years...100 Movies (10th Anniversary Edition) list. In 2012, Sight & Sound named it the 31st-best film ever in its decennial critics' poll, ranked with The Godfather Part II, and the fifth-greatest film of all time on its directors' poll. The film was considered \"culturally, historically or aesthetically\" significant by the US Library of Congress and was selected for preservation in the National Film Registry in 1994.", "wUrl": "http://en.wikipedia.org/wiki/Taxi_Driver", "yUrl": "https://www.youtube-nocookie.com/embed/sLpMx8_TYOo", "yID": "sLpMx8_TYOo"}, {"Name": "Snatch", "Type": "movie", "wTeaser": "Snatch (stylised as snatch.) is a 2000 crime comedy film written and directed by Guy Ritchie, featuring an ensemble cast. Set in the London criminal underworld, the film contains two intertwined plots: one dealing with the search for a stolen diamond, the other with a small-time boxing promoter (Jason Statham) who finds himself under the thumb of a ruthless gangster (Alan Ford) who is ready and willing to have his subordinates carry out severe and sadistic acts of violence.The film features an assortment of characters, including Irish Traveller Mickey O'Neil (Brad Pitt), or in this case, referred to as \"pikeys\", arms-dealer Boris \"the Blade\" Yurinov (Rade \u0160erbed\u017eija), professional thief and gambling addict Franky \"Four-Fingers\" (Benicio del Toro), American gangster-jeweller Abraham Denovitz known as \"Cousin Avi\" (Dennis Farina), and bounty hunter Bullet-Tooth Tony (Vinnie Jones). It is also distinguished by a kinetic direction and editing style, a circular plot featuring numerous ironic twists of chance and causality, and a fast pace.", "wUrl": "http://en.wikipedia.org/wiki/Snatch_(movie)", "yUrl": "https://www.youtube-nocookie.com/embed/ni4tEtuTccc", "yID": "ni4tEtuTccc"}, {"Name": "Natural Born Killers", "Type": "movie", "wTeaser": "Natural Born Killers is a 1994 American satirical black comedy crime film directed by Oliver Stone and starring Woody Harrelson, Juliette Lewis, Robert Downey, Jr., Tom Sizemore, and Tommy Lee Jones. The film was released in the United States on August 26, 1994. The film tells the story of two victims of traumatic childhoods who became lovers and mass murderers, and are irresponsibly glorified by the mass media.The film is based on an original screenplay by Quentin Tarantino that was heavily revised by writer David Veloz, associate producer Richard Rutowski, and director Stone. Tarantino received story credit. Jane Hamsher, Don Murphy, and Clayton Townsend produced the film, with Arnon Milchan, Thom Mount, and Stone as executive producers.", "wUrl": "http://en.wikipedia.org/wiki/Natural_Born_Killers", "yUrl": "https://www.youtube-nocookie.com/embed/XpLKNclOtLg", "yID": "XpLKNclOtLg"}, {"Name": "Trainspotting", "Type": "movie", "wTeaser": "Trainspotting is a 1996 British black comedy crime drama film directed by Danny Boyle, and starring Ewan McGregor, Ewen Bremner, Jonny Lee Miller, Kevin McKidd, Robert Carlyle and Kelly Macdonald. Based on the novel of the same name by Irvine Welsh, the film was released in the United Kingdom on 23 February 1996.The Academy Award nominated screenplay by John Hodge follows a group of heroin addicts in a late 1980s economically depressed area of Edinburgh and their passage through life. Beyond drug addiction, other themes in the film are exploration of the urban poverty and squalor in \"culturally rich\" Edinburgh.The film has been ranked 10th by the British Film Institute (BFI) in its list of Top 100 British films of all time. In 2004 the film was voted the best Scottish film of all time in a general public poll.", "wUrl": "http://en.wikipedia.org/wiki/Trainspotting_(film)", "yUrl": "https://www.youtube-nocookie.com/embed/8LuxOYIpu-I", "yID": "8LuxOYIpu-I"}, {"Name": "Lock, Stock And Two Smoking Barrels", "Type": "movie", "wTeaser": "Lock, Stock and Two Smoking Barrels is a 1998 British crime comedy film written and directed by Guy Ritchie. The story is a heist film involving a self-confident young card sharp who loses \u00a3500,000 to a powerful crime lord in a rigged game of three card brag. To pay off his debts, he and his friends decide to rob a small-time gang who happen to be operating out of the flat next door. The film brought Guy Ritchie international acclaim and introduced actors Vinnie Jones, a former Wales international footballer, and Jason Statham, a former diver, to worldwide audiences. Based on a $1.35 million budget, the film had a box office gross of $28.3 million, making it a commercial success.A television series, Lock, Stock..., followed in 2000, running for seven episodes including the pilot.", "wUrl": "http://en.wikipedia.org/wiki/Lock,_Stock_and_Two_Smoking_Barrels", "yUrl": "https://www.youtube-nocookie.com/embed/h6hZkvrFIj0", "yID": "h6hZkvrFIj0"}, {"Name": "Fear And Loathing In Las Vegas", "Type": "movie", "wTeaser": "Fear and Loathing in Las Vegas is a 1998 American avant-garde black comedy road film, adapted from Hunter S. Thompson's novel by the same name. It was co-written and directed by Terry Gilliam, starring Johnny Depp as Raoul Duke and Benicio del Toro as Dr. Gonzo.The movie was a box office failure, grossing US$10.6 million at the North American box office, well below its $18.5 million budget. It has since become a cult film due in large part to its release on DVD, including a Special Edition released by The Criterion Collection.A montage of news clips of Civil Rights Movement and Vietnam War protests is seen while The Lennon Sisters cover of \"My Favorite Things\" is heard.Raoul Duke (Depp) and Dr. Gonzo (del Toro) speed across the Nevada desert. Duke, under the influence of mescaline, complains of a swarm of giant bats, before going through the pair's inventory of psychoactive drugs. Shortly afterward, the duo stop to pick up a young hitchhiker (Maguire), and explain what they are doing. Duke has been assigned by an unnamed magazine to travel to Las Vegas and cover the Mint 400 motorcycle race. However, they have also decided to take advantage of the trip by purchasing a large number of drugs, and rent a red Chevrolet Impala convertible. The young man soon becomes terrified of the antics of the duo, and flees on foot. Trying to reach Vegas before the hitchhiker can go to the police, Gonzo gives Duke part of a sheet of \"Sunshine Acid\", then informs him that there is little chance of making it before the drug kicks in. By the time they reach the strip, Duke is in the full throes of his trip, and barely makes it through the check-in, all the while hallucinating that the hotel clerk is a moray eel, and that his fellow bar patrons are lizards in the depths of an orgy.", "wUrl": "http://en.wikipedia.org/wiki/Fear_and_Loathing_in_Las_Vegas_(film)", "yUrl": "https://www.youtube-nocookie.com/embed/8m662obIvhY", "yID": "8m662obIvhY"}, {"Name": "Grindhouse", "Type": "movie", "wTeaser": "Grindhouse is a 2007 American horror film double feature co-written, produced, and directed by Robert Rodriguez and Quentin Tarantino. The double feature consists of two feature-length segments, Rodriguez's Planet Terror and Tarantino's Death Proof, and is bookended by fictional trailers for upcoming attractions, advertisements, and in-theater announcements. The film's title derives from the U.S. film industry term \"grindhouse\", which refers to (now mostly defunct) movie theaters specializing in B movies, often exploitation films, shown in a multiple-feature format. The film stars Rose McGowan, Freddy Rodriguez, Marley Shelton, Michael Biehn, Jeff Fahey, Josh Brolin, Naveen Andrews, Fergie, Bruce Willis, Kurt Russell, Rosario Dawson, Tracie Thoms, Mary Elizabeth Winstead and stuntwoman Zo\u00eb Bell, who plays herself.", "wUrl": "http://en.wikipedia.org/wiki/Grindhouse_(film)", "yUrl": "https://www.youtube-nocookie.com/embed/9ZTIM8zJVYI", "yID": "9ZTIM8zJVYI"}, {"Name": "The Usual Suspects", "Type": "movie", "wTeaser": "The Usual Suspects is a 1995 American neo-noir mystery crime thriller film directed by Bryan Singer and written by Christopher McQuarrie. It stars Stephen Baldwin, Gabriel Byrne, Benicio del Toro, Kevin Pollak, Chazz Palminteri, Pete Postlethwaite and Kevin Spacey.The film follows the interrogation of Roger \"Verbal\" Kint, a small-time con man who is one of only two survivors of a massacre and fire on a ship docked at the Port of Los Angeles. He tells an interrogator a convoluted story about events that led him and his partners in crime to the boat, and about a mysterious mob boss known as Keyser S\u00f6ze who commissioned their work. Using flashback and narration, Kint's story becomes increasingly complex.", "wUrl": "http://en.wikipedia.org/wiki/The_Usual_Suspects", "yUrl": "https://www.youtube-nocookie.com/embed/oiXdPolca5w", "yID": "oiXdPolca5w"}, {"Name": "Scarface", "Type": "movie", "wTeaser": "Scarface is a 1983 American crime drama film directed by Brian De Palma and written by Oliver Stone, a remake of the 1932 film of the same name. The film tells the story of Cuban refugee Tony Montana (Al Pacino) who arrives in 1980s Miami with nothing and rises to become a powerful drug kingpin. The cast also features Mary Elizabeth Mastrantonio, Steven Bauer, and Michelle Pfeiffer.Scarface was released on December 9, 1983 and was a box office success, grossing $44 million. Initial critical reception was mixed, with criticism over excessive violence and profanity and graphic drug usage. Some Cuban expatriates in Miami objected to the film's portrayal of Cubans as criminals and drug traffickers. In the years that followed, the film has received reappraisal from critics and is considered by some to be one of the best within the mob film genre. Screenwriters and directors such as Martin Scorsese have praised the film, and it has since resulted in many cultural references, such as in rap music, comic books, and video games.", "wUrl": "http://en.wikipedia.org/wiki/Scarface_(1983_movie)", "yUrl": "https://www.youtube-nocookie.com/embed/7pQQHnqBa2E", "yID": "7pQQHnqBa2E"}, {"Name": "Four Rooms", "Type": "movie", "wTeaser": "Four Rooms is a 1995 anthology comedy film directed by Allison Anders, Alexandre Rockwell, Robert Rodriguez, and Quentin Tarantino, each directing one segment of the film that in its entirety is loosely based on the adult short fiction writings of Roald Dahl, especially Man from the South which is the basis for the last segment, Penthouse - \"The Man from Hollywood\" directed by Tarantino. The story is set in the fictional Hotel Mon Signor in Los Angeles on New Year's Eve. Tim Roth plays Ted, the hotel bellhop and main character in the frame story, whose first night on the job consists of four very different encounters with various hotel guests.The film is set on New Year's Eve, and starts with Sam (Marc Lawrence), the previous bellhop of the Hotel Mon Signor, briefing his replacement, Ted (Tim Roth), about the job.", "wUrl": "http://en.wikipedia.org/wiki/Four_Rooms", "yUrl": "https://www.youtube-nocookie.com/embed/S_Pd2pGkq54", "yID": "S_Pd2pGkq54"}]}};
    return {
      movies: movies,
      tasteKid: tasteKid,
      watchList: watchList
    };
  });

