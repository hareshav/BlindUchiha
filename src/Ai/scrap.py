import requests
from bs4 import BeautifulSoup
import pandas as pd
url = "https://www.coindesk.com/"
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')
lists=soup.find_all('a',class_='card-titlestyles__CardTitleWrapper-sc-1ptmy9y-0 junCw card-title-link')
data = []
for item in lists:
    title = item.text.strip()
    link = 'https://www.coindesk.com' + item['href']
    try:
        responses = requests.get(link)
        soups = BeautifulSoup(responses.content, 'html.parser')
        article=(soups.find('article').text)
    except:
        article='Not Available'
    data.append((title,link,article))


df = pd.DataFrame(data, columns=['Title','URL','ARTICLE'])
print(df)
df.to_csv('data.csv')


    
