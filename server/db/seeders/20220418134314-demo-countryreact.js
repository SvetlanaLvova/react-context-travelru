'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('CountryReacts', [
        {
        tittle: 'Ireland',
        description: 'Государство и остров в Северной Европе, на границе с Великобританией. Как государство, Ирландия граничит с Великобританией, конкретнее — с Северной Ирландией.',
        img: 'https://wikiway.com/upload/hl-photo/dea/10a/poluostrov-dingl_83.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tittle: 'USA',
        description: 'Одно из крупнейших и влиятельнейших государств современного мира. Оно находится в Северной Америке и является четвертым по территории после России, Канады и Китая.',
        img: 'https://wikiway.com/upload/hl-photo/ba2/653/statuya-svobody_127.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tittle: 'Germany',
        description: 'Удивительная страна с тысячелетней историей и вековыми традициями, в летопись которой вписаны победы и поражения, периоды расцвета и поистине трагические страницы.',
        img: 'https://wikiway.com/upload/uf/03d/germany_2.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tittle: 'France',
        description: 'Изысканная и пикантная страна, не перестающая удивлять и восхищать. Кто хоть однажды побывал во Франции, почувствовал её неповторимый дух и аромат, познакомился с её культурой и историей, окунулся в беспечный французский образ жизни, попробовал тающие на языке изыски местной кулинарии, тот будет стремиться сюда вновь и вновь, каждый раз открывая для себя что-то новое.',
        img: 'https://wikiway.com/upload/uf/e7f/nancy_076.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tittle: 'Austria',
        description: 'Расположилась в центре Европы, отхватив себе приличную часть Восточных Альп с их сказочными долинами, мистическими сосновыми чащами и тысячелетними ледниками.',
        img: 'https://wikiway.com/upload/uf/317/austria_4.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tittle: 'India',
        description: 'Не место для труса. Представляя собой постоянный вызов для ума и тела, она основательно потрясает весь ваш организм. Она волнует, истощает и приводит в ярость.',
        img: 'https://wikiway.com/upload/home/t/tema389/smileplanet.ru/public_html/upload/hl-photo/2d6/bara-imambara_109.jpg/dde/bara-imambara_109.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('People', null, {});
  }
};
