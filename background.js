browser.contextMenus.create({
  id: "yans-search",
  title: "Search image on Yandex",
  contexts: ["image"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-yandex") {
    const yandexSearchUrl = `https://yandex.com/images/search?rpt=imageview&url=${encodeURIComponent(info.srcUrl)}`;
    browser.tabs.create({ url: yandexSearchUrl });
  }
});