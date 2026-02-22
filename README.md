# affix-generator

Create a small generator that produces item names (and optionally simple stats) by combining a base item with a weighted prefix and weighted suffix (affixes).

## Reflection

So I started this generator thinking it would be pretty simple and straight forwards, but as it went on I had to amend a lot of things (and also add a lot of extra cases). Here are a couple example drinks that got generated that made me go back through the code to make sure it wouldn't happen again:

- hot fresh orange juice
- hot honey almondmilk flat white with soy milk, 1 pump of cinnamon dolce, and whipped cream
- iced white mocha with whole milk with 1 pump mocha and sweet cream cold foam

The first drink was just a weird drink, and I removed the option for adding a hot prefix to a drink name. Coffee drinks are usually assumed to be hot anyways so it was okay. For the second drink, I hadn't added the change for removing the hot prefix yet, but I did add another check in to make sure I wasn't adding two different types of milk (in that drink's case it was honey almond milk and soy milk). For the third generated drink, I went back and added grammar rules so that the name would be grammatically correct.

The most surprising thing was how many edge cases came up: things I never would have thought of until i saw them get generated. I also added the hidden drinks (since they were coffee orders that my that my friends have actually done before) as fun little easter eggs.

I added wildcard as a last minute idea - and basically it just choses a drink from all the options (which is a lot of options) and it makes the generator more fun (I think).