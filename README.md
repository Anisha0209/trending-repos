React Mobile Developer
Assessment

Coding Challenge :
Task :
Implement a small web app that is responsive using Reactjs that list the most starred
Github repos created in the last 10 days.
Features :

> As a user, I should see the most starred Github repos that were created in the
> last 10 days.
> As a user, I should see the results as an item list. One repository should be
> displayed per row.
> As a user, I should be able to see for each repo the following :
> ** Repository name
> **Repository description
> ** Numbers of stars for the repo.
> ** Username and avatar of the owner.
> As a user, I should be able to scroll and new results should appear (pagination).
> How to fetch data from Github –
> To get the most starred Github repos in the last 10 days (current date as 2024-07-15),
> you'll need to call the following endpoint :
> https://api.github.com/search/repositories?q=created:&gt;2024-07-15&amp;sort=stars&amp;order=desc
> To get the 2 nd page, you need to add &amp;page=2
> https://api.github.com/search/repositories?q=created:&gt;2024-07-15&amp;sort=stars&amp;order=desc&amp;page=2
> and so on for page 3 etc.

Things to consider while development

> Code quality
> Code structure
> Best practices
