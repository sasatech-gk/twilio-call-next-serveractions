
# 目的
Next.jsのServerActionsを使用して、TwilioのAPIを使用して電話を送信する

# 環境構築
## Twilioのアカウントを作成
1. [Twilio](https://www.twilio.com/)にアクセスして、アカウントを作成する
2. アカウントを作成したら、[ダッシュボード](https://www.twilio.com/console)にアクセスする
3. ダッシュボードの左側のメニューから、「電話番号」を選択する
4. 「電話番号の購入」を選択して、電話番号を購入する
5. 購入した電話番号を選択して、電話番号の設定を開く
6. 「A call comes in」の「Webhook」に、`http://localhost:3000/api/twilio`を設定する
7. 「Save」をクリックして、設定を保存する
8. 「電話番号」のページに戻り、購入した電話番号をクリックして、電話番号のSIDをコピーする
9. `.env.local`ファイルを作成して、以下の内容を追加する
```
TWILIO_ACCOUNT_SID=アカウントSID
TWILIO_AUTH_TOKEN=認証トークン
TWILIO_PHONE_NUMBER=購入した電話番号
```

## Next.jsのプロジェクトを