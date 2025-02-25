@bot.message_handler(content_types=['web_app_data'])
def web_app_received(message):
    """Получает данные, отправленные из Mini App."""
    data = message.web_app_data.data
    bot.send_message(message.chat.id, f"Получены данные из Mini App: {data}")