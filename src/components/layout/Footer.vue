<template>
  <div>
    <footer class="py-8 px-4 bg1">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-between">
          <div class="space-y-4">
            <b>КАК КУПИТЬ</b>
            <ul>
              <li><a href="#">Интернет-магазин</a></li>
              <li><a href="#">Покупка по счету и бронирование</a></li>
              <li><a href="#">Подарочный билет</a></li>
              <li><a href="#">Цены услуги</a></li>
              <li><a href="#">Мобильный билет</a></li>
              <li><a href="#">Условия пользования интернет-магазином</a></li>
              <li><a href="#">ЧаВо - часто задаваемые вопросы</a></li>
            </ul>
          </div>
          <div class="space-y-4">
            <b>Организатору</b>
            <ul>
              <li><a href="#">Стоимость услуг</a></li>
              <li><a href="#">Рекламные услуги</a></li>
              <li><a href="#">Лист заказа</a></li>
              <li><a href="#">Логотипы - графика фирмы</a></li>
              <li><a href="#">Продажа билетов (отчетность)</a></li>
              <li><a href="#">Для администраторов</a></li>
              <li><a href="#">Контакт</a></li>
              <li><a href="#">Общие условия</a></li>
            </ul>
          </div>
          <div class="space-y-4">
            <b>О фирме</b>
            <ul>
              <li><a href="#">Контактные данные / Люди</a></li>
              <li><a href="#">Estonian Ticket Holdings</a></li>
              <li><a href="#">Общие принципы обработки персональных данных</a></li>
            </ul>
          </div>
          <div class="space-y-4">
            <b>Обратная связь</b>
            <ul>
              <li><a href="#">Обратная связь</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<style lang="scss">
  .bg1 {
    background:
      100% 130% / auto 60% no-repeat url('~@/assets/000.png'),
      linear-gradient(60deg, rgba(114,255,173,1) 0%, rgba(169,215,254,1) 100%);
  }
  @media (min-width: 640px) {
    .bg1 {
      background:
        100% 20% / auto 120% no-repeat url('~@/assets/000.png'),
        linear-gradient(60deg, rgba(114,255,173,1) 0%, rgba(169,215,254,1) 100%);
    }
  }
</style>
