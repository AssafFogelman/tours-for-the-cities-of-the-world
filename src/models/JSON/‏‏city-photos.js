let cityImageArray = [
    {
        cityName: "aarhus",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/aarhus-67c2f42848.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/aarhus_web-1462c370b8.jpg",
    },
    {
        cityName: "adelaide",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/adelaide-3b1b936db3.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/adelaide_web-e462ed5b74.jpg",
    },
    {
        cityName: "albuquerque",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/albuquerque-f730c0301f.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/albuquerque_web-3079b54e59.jpg",
    },
    {
        cityName: "almaty",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/almaty-e6f7b165d0.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/almaty_web-acac42d539.jpg",
    },
    {
        cityName: "amsterdam",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/amsterdam-731a0d165a.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/amsterdam_web-1cd4b2bf75.jpg",
    },
    {
        cityName: "anchorage",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/anchorage-a75ea8617c.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/anchorage_web-f4b864de05.jpg",
    },
    {
        cityName: "andorra",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/andorra-b139acf7b1.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/andorra_web-be85670237.jpg",
    },
    {
        cityName: "ankara",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/ankara-af854e11da.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/ankara_web-5c79a0f22a.jpg",
    },
    {
        cityName: "asheville",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/asheville-d2a4aaacae.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/asheville_web-9ee1a50c7c.jpg",
    },
    {
        cityName: "asuncion",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/asuncion-6f34e2d44d.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/asuncion_web-ccff2634a4.jpg",
    },
    {
        cityName: "athens",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/athens-325ec1b595.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/athens_web-d8e89c8496.jpg",
    },
    {
        cityName: "atlanta",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/atlanta-9e33744cb4.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/atlanta_web-01e0d78232.jpg",
    },
    {
        cityName: "auckland",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/auckland-d60b1ab66b.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/auckland_web-a178a0f647.jpg",
    },
    {
        cityName: "austin",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/austin-f42354c37f.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/austin_web-e93a5e75a0.jpg",
    },
    {
        cityName: "baku",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/baku-0aa6019508.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/baku_web-71bcbddb43.jpg",
    },
    {
        cityName: "bali",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bali-934e688d1a.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bali_web-8c42fbe979.jpg",
    },
    {
        cityName: "baltimore",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/baltimore-14c1f65307.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/baltimore_web-251806a8b8.jpg",
    },
    {
        cityName: "bangkok",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bangkok-abfa69e431.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bangkok_web-24b795d6ac.jpg",
    },
    {
        cityName: "barcelona",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/barcelona-aacdf7ba91.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/barcelona_web-8ce54f1421.jpg",
    },
    {
        cityName: "beijing",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/beijing-536dacdadf.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/beijing_web-a6aa65e646.jpg",
    },
    {
        cityName: "beirut",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/beirut-ef6936d067.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/beirut_web-7c42a04b9a.jpg",
    },
    {
        cityName: "belfast",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/belfast-ec5ae8b81e.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/belfast_web-bd24559e6e.jpg",
    },
    {
        cityName: "belgrade",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/belgrade-0f5df4fa7a.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/belgrade_web-212bcfc828.jpg",
    },
    {
        cityName: "belize-city",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/belize-city-9d18240778.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/belize-city_web-374466b5bd.jpg",
    },
    {
        cityName: "bengaluru",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bengaluru-95c4126d8f.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bengaluru_web-bf52a4c14f.jpg",
    },
    {
        cityName: "bergen",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bergen-77dcd0440d.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bergen_web-08dc70c9a1.jpg",
    },
    {
        cityName: "berlin",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/berlin-c96f97c4ba.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/berlin_web-42996a2587.jpg",
    },
    {
        cityName: "bern",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bern-68ce01df41.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bern_web-d74cd85f5c.jpg",
    },
    {
        cityName: "bilbao",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bilbao-3e47e9a98e.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bilbao_web-2a6089e655.jpg",
    },
    {
        cityName: "birmingham",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/birmingham-f603089e10.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/birmingham_web-76fdd27a1c.jpg",
    },
    {
        cityName: "birmingham-al",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/birmingham-al-519d15019a.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/birmingham-al_web-8faa3202a7.jpg",
    },
    {
        cityName: "bogota",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bogota-8dc7193397.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bogota_web-7fc246764f.jpg",
    },
    {
        cityName: "boise",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/boise-d105b2e947.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/boise_web-ab609d8f2f.jpg",
    },
    {
        cityName: "bologna",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bologna-778667e51d.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bologna_web-9fcbf7d109.jpg",
    },
    {
        cityName: "bordeaux",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bordeaux-02c83f38b1.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bordeaux_web-0bc8d1e9fd.jpg",
    },
    {
        cityName: "boston",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/boston-7399414b98.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/boston_web-550bb970ba.jpg",
    },
    {
        cityName: "boulder",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/boulder-75be72cfaf.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/boulder_web-3765374a2b.jpg",
    },
    {
        cityName: "bozeman",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bozeman-be510b35ee.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bozeman_web-d4ed92c20b.jpg",
    },
    {
        cityName: "bratislava",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bratislava-25c0ce72a3.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bratislava_web-0a3c9d6cee.jpg",
    },
    {
        cityName: "brighton",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/brighton-1b7e2d30d8.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/brighton_web-77835c9a55.jpg",
    },
    {
        cityName: "brisbane",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/brisbane-194b3e5b49.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/brisbane_web-9770dd4972.jpg",
    },
    {
        cityName: "bristol",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bristol-6f35ac7985.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bristol_web-cd250da968.jpg",
    },
    {
        cityName: "brno",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/brno-6e7bb6ef6b.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/brno_web-8fde468fac.jpg",
    },
    {
        cityName: "brussels",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/brussels-0d5db943f4.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/brussels_web-638082b79b.jpg",
    },
    {
        cityName: "bucharest",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bucharest-0baa0f5eaa.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/bucharest_web-b82e0bb355.jpg",
    },
    {
        cityName: "budapest",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/budapest-e325bd2bb4.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/budapest_web-9de9bc410f.jpg",
    },
    {
        cityName: "buenos-aires",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/buenos-aires-bb7fb05d6b.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/buenos-aires_web-17f0020100.jpg",
    },
    {
        cityName: "buffalo",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/buffalo-9f2a7e56fa.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/buffalo_web-fa914f05b9.jpg",
    },
    {
        cityName: "cairo",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/cairo-ba88a8816b.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/cairo_web-52946f68c1.jpg",
    },
    {
        cityName: "calgary",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/calgary-e0d8e7b67f.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/calgary_web-731a90b807.jpg",
    },
    {
        cityName: "cambridge",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/cambridge-959b693a44.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/cambridge_web-18308c1a16.jpg",
    },
    {
        cityName: "cape-town",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/cape-town-fa015ec35b.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/cape-town_web-fb6e942b16.jpg",
    },
    {
        cityName: "caracas",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/caracas-ebd8917fa6.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/caracas_web-7b3ec40c94.jpg",
    },
    {
        cityName: "cardiff",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/cardiff-95ed1d4ce4.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/cardiff_web-674ad9c9ef.jpg",
    },
    {
        cityName: "casablanca",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/casablanca-06c7107aa5.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/casablanca_web-52e4b34233.jpg",
    },
    {
        cityName: "charleston",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/charleston-595fdee96e.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/charleston_web-d8fe7f2811.jpg",
    },
    {
        cityName: "charlotte",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/charlotte-acc065366a.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/charlotte_web-062d6f0cd8.jpg",
    },
    {
        cityName: "chattanooga",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/chattanooga-faefd3d09a.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/chattanooga_web-9dd6779191.jpg",
    },
    {
        cityName: "chennai",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/chennai-ed456334e5.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/chennai_web-cfd75649a5.jpg",
    },
    {
        cityName: "chiang-mai",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/chiang-mai-744406e9e0.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/chiang-mai_web-5403ba3666.jpg",
    },
    {
        cityName: "chicago",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/chicago-1e610b84c3.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/chicago_web-b20b0b8249.jpg",
    },
    {
        cityName: "chisinau",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/chisinau-80ba5b8c71.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/chisinau_web-21a9e52e2e.jpg",
    },
    {
        cityName: "christchurch",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/christchurch-0cf7c854fe.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/christchurch_web-23e4656c2c.jpg",
    },
    {
        cityName: "cincinnati",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/cincinnati-c45eaa103c.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/cincinnati_web-5c8d680d6b.jpg",
    },
    {
        cityName: "cleveland",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/cleveland-293d4e8c4c.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/cleveland_web-171efbfa3a.jpg",
    },
    {
        cityName: "cluj-napoca",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/cluj-napoca-80c173dd65.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/cluj-napoca_web-5ceb03ea4b.jpg",
    },
    {
        cityName: "cologne",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/cologne-c9ec74dec3.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/cologne_web-9176bda62d.jpg",
    },
    {
        cityName: "colorado-springs",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/colorado-springs-ccf32e73d2.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/colorado-springs_web-a8228d2190.jpg",
    },
    {
        cityName: "columbus",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/columbus-f65f5476cf.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/columbus_web-748d46d705.jpg",
    },
    {
        cityName: "copenhagen",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/copenhagen-db746852d1.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/copenhagen_web-0f21a09556.jpg",
    },
    {
        cityName: "cork",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/cork-a74562472f.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/cork_web-1a9e606c19.jpg",
    },
    {
        cityName: "curitiba",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/curitiba-81eae696f4.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/curitiba_web-174df4bc8d.jpg",
    },
    {
        cityName: "dallas",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/dallas-a55f677457.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/dallas_web-1b0ab83512.jpg",
    },
    {
        cityName: "dar-es-salaam",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/dar-es-salaam-0106cbeeb1.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/dar-es-salaam_web-35099c7334.jpg",
    },
    {
        cityName: "delhi",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/delhi-c0a7e4cf62.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/delhi_web-a44b25acb2.jpg",
    },
    {
        cityName: "denver",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/denver-655725fd8b.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/denver_web-9726d88300.jpg",
    },
    {
        cityName: "des-moines",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/des-moines-21042501eb.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/des-moines_web-3ea5b6d3c3.jpg",
    },
    {
        cityName: "detroit",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/detroit-e0a9dfeff2.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/detroit_web-fa9062b00a.jpg",
    },
    {
        cityName: "doha",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/doha-a7431481f9.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/doha_web-608bb1baef.jpg",
    },
    {
        cityName: "dresden",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/dresden-34b4a78bf4.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/dresden_web-17c407d521.jpg",
    },
    {
        cityName: "dubai",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/dubai-89581487e2.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/dubai_web-e211678fd9.jpg",
    },
    {
        cityName: "dublin",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/dublin-acf68f9012.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/dublin_web-6815db729f.jpg",
    },
    {
        cityName: "dusseldorf",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/dusseldorf-4dad01e18e.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/dusseldorf_web-6df143652a.jpg",
    },
    {
        cityName: "edinburgh",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/edinburgh-ad0653a76d.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/edinburgh_web-18ebc57174.jpg",
    },
    {
        cityName: "edmonton",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/edmonton-405d742d77.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/edmonton_web-9ee9e16446.jpg",
    },
    {
        cityName: "eindhoven",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/eindhoven-f40936546b.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/eindhoven_web-b4482e3780.jpg",
    },
    {
        cityName: "eugene",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/eugene-c98f529290.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/eugene_web-40a357f0c4.jpg",
    },
    {
        cityName: "florence",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/florence-ddf9003aa1.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/florence_web-9bdb5ab7cf.jpg",
    },
    {
        cityName: "florianopolis",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/florianopolis-d07f8216bf.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/florianopolis_web-fa46d494f0.jpg",
    },
    {
        cityName: "fort-collins",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/fort-collins-23ecdede12.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/fort-collins_web-4f6961e6e4.jpg",
    },
    {
        cityName: "frankfurt",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/frankfurt-c7c5f50305.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/frankfurt_web-b3ce5e2270.jpg",
    },
    {
        cityName: "fukuoka",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/fukuoka-719ae64d54.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/fukuoka_web-f7e0ca9bd0.jpg",
    },
    {
        cityName: "gaillimh",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/gaillimh-312de1b5ab.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/gaillimh_web-059ef82df4.jpg",
    },
    {
        cityName: "gdansk",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/gdansk-1597ef2a0f.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/gdansk_web-f5f48564f4.jpg",
    },
    {
        cityName: "geneva",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/geneva-ef3b5749a3.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/geneva_web-17df94c117.jpg",
    },
    {
        cityName: "gibraltar",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/gibraltar-e563d90acf.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/gibraltar_web-98477ce33a.jpg",
    },
    {
        cityName: "glasgow",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/glasgow-e4bcca691b.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/glasgow_web-487c0a6b66.jpg",
    },
    {
        cityName: "gothenburg",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/gothenburg-83b57a5feb.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/gothenburg_web-85d49ea381.jpg",
    },
    {
        cityName: "grenoble",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/grenoble-a3c92744cb.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/grenoble_web-14ae75217c.jpg",
    },
    {
        cityName: "guadalajara",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/guadalajara-b7eb63f649.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/guadalajara_web-62348f0923.jpg",
    },
    {
        cityName: "guatemala-city",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/guatemala-city-69c91dfc00.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/guatemala-city_web-047225c087.jpg",
    },
    {
        cityName: "halifax",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/halifax-27e17f2ce8.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/halifax_web-92b02d4873.jpg",
    },
    {
        cityName: "hamburg",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/hamburg-6ef9530ff8.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/hamburg_web-bd28aab609.jpg",
    },
    {
        cityName: "hannover",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/hannover-5ea8044ce4.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/hannover_web-b3046d05cf.jpg",
    },
    {
        cityName: "havana",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/havana-809012259a.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/havana_web-c3f326f3f7.jpg",
    },
    {
        cityName: "helsinki",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/helsinki-1202ff2170.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/helsinki_web-eaaa1a4064.jpg",
    },
    {
        cityName: "ho-chi-minh-city",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/ho-chi-minh-city-e615342546.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/ho-chi-minh-city_web-307eb3d218.jpg",
    },
    {
        cityName: "hong-kong",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/hong-kong-09cb9b74b0.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/hong-kong_web-64b58d8c1b.jpg",
    },
    {
        cityName: "honolulu",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/honolulu-624c07453d.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/honolulu_web-1b1279edc3.jpg",
    },
    {
        cityName: "houston",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/houston-0e46f4fbb7.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/houston_web-7a1ff7109f.jpg",
    },
    {
        cityName: "hyderabad",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/hyderabad-c7f647937d.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/hyderabad_web-6c1177e0db.jpg",
    },
    {
        cityName: "indianapolis",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/indianapolis-0f293b1150.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/indianapolis_web-de0ee7a5bd.jpg",
    },
    {
        cityName: "innsbruck",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/innsbruck-fb4a25ee07.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/innsbruck_web-ff4f5bb5b7.jpg",
    },
    {
        cityName: "istanbul",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/istanbul-bbe6bcce3f.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/istanbul_web-3fe0dbfd69.jpg",
    },
    {
        cityName: "jacksonville",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/jacksonville-62a5b94ba8.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/jacksonville_web-cc69395f3f.jpg",
    },
    {
        cityName: "jakarta",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/jakarta-7a73f56e41.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/jakarta_web-69216c8025.jpg",
    },
    {
        cityName: "johannesburg",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/johannesburg-6f2d7ccc07.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/johannesburg_web-6d56b16404.jpg",
    },
    {
        cityName: "kansas-city",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/kansas-city-1e8f1c1456.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/kansas-city_web-d977356d14.jpg",
    },
    {
        cityName: "karlsruhe",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/karlsruhe-9b87b495f5.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/karlsruhe_web-af446b3913.jpg",
    },
    {
        cityName: "kathmandu",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/kathmandu-e60a22e131.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/kathmandu_web-792cf16781.jpg",
    },
    {
        cityName: "kiev",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/kiev-e7a4b194e1.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/kiev_web-86086ae216.jpg",
    },
    {
        cityName: "kingston",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/kingston-cb632a919d.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/kingston_web-ac760c1fca.jpg",
    },
    {
        cityName: "knoxville",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/knoxville-8e071a1579.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/knoxville_web-ee19eb4974.jpg",
    },
    {
        cityName: "krakow",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/krakow-c22885ae40.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/krakow_web-618bd7788b.jpg",
    },
    {
        cityName: "kuala-lumpur",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/kuala-lumpur-1663138882.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/kuala-lumpur_web-d9a669d5d4.jpg",
    },
    {
        cityName: "kyoto",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/kyoto-bc8c37d2f9.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/kyoto_web-aa4cdb11e7.jpg",
    },
    {
        cityName: "lagos",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/lagos-f42cff422e.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/lagos_web-7f21edd9c4.jpg",
    },
    {
        cityName: "la-paz",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/la-paz-b6e7626788.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/la-paz_web-681a5137af.jpg",
    },
    {
        cityName: "las-palmas-de-gran-canaria",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/las-palmas-de-gran-canaria-e74ff76acd.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/las-palmas-de-gran-canaria_web-fe5efe4810.jpg",
    },
    {
        cityName: "las-vegas",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/las-vegas-6acb21a1fe.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/las-vegas_web-7dc177ab7c.jpg",
    },
    {
        cityName: "lausanne",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/lausanne-b4aeaa635f.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/lausanne_web-d3df8656ec.jpg",
    },
    {
        cityName: "leeds",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/leeds-6913c9d8ac.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/leeds_web-614dd7bd0c.jpg",
    },
    {
        cityName: "leipzig",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/leipzig-2ead903e61.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/leipzig_web-a64d74e819.jpg",
    },
    {
        cityName: "lille",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/lille-221e93ffda.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/lille_web-556e404f8c.jpg",
    },
    {
        cityName: "lima",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/lima-0c69e4ed56.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/lima_web-d5641b4390.jpg",
    },
    {
        cityName: "lisbon",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/lisbon-2b8bf1786b.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/lisbon_web-294c05442f.jpg",
    },
    {
        cityName: "liverpool",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/liverpool-564727cbf9.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/liverpool_web-3038c1bea1.jpg",
    },
    {
        cityName: "ljubljana",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/ljubljana-19d815be2e.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/ljubljana_web-adc151f388.jpg",
    },
    {
        cityName: "london",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/london-12fdfd9fcf.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/london_web-e8502ca139.jpg",
    },
    {
        cityName: "los-angeles",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/los-angeles-f5b60deb04.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/los-angeles_web-2eedb2a83e.jpg",
    },
    {
        cityName: "louisville",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/louisville-d5997729f5.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/louisville_web-af543d6a99.jpg",
    },
    {
        cityName: "luxembourg",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/luxembourg-1fea6523dc.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/luxembourg_web-c82ccc399b.jpg",
    },
    {
        cityName: "lviv",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/lviv-9cc63e64e2.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/lviv_web-3e20fcd298.jpg",
    },
    {
        cityName: "lyon",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/lyon-b5d38c06cf.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/lyon_web-32d6865b19.jpg",
    },
    {
        cityName: "madison",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/madison-3d09b9f142.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/madison_web-c8769a2784.jpg",
    },
    {
        cityName: "madrid",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/madrid-ee355b90b3.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/madrid_web-baf72ff2d6.jpg",
    },
    {
        cityName: "malaga",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/malaga-162a2bb8fd.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/malaga_web-58cf77c170.jpg",
    },
    {
        cityName: "malmo",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/malmo-cbc10d0dc3.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/malmo_web-fc1793c12c.jpg",
    },
    {
        cityName: "managua",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/managua-f2637ab6ef.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/managua_web-d7bc30e574.jpg",
    },
    {
        cityName: "manchester",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/manchester-f873de8594.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/manchester_web-cea1b0c243.jpg",
    },
    {
        cityName: "manila",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/manila-5150275531.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/manila_web-d60a05cd04.jpg",
    },
    {
        cityName: "marseille",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/marseille-65ca8f5da8.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/marseille_web-8490928ef4.jpg",
    },
    {
        cityName: "medellin",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/medellin-8559818a33.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/medellin_web-d40fa1b2b9.jpg",
    },
    {
        cityName: "melbourne",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/melbourne-17ca593856.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/melbourne_web-c18afdd50c.jpg",
    },
    {
        cityName: "memphis",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/memphis-6135da61bc.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/memphis_web-6015ce820e.jpg",
    },
    {
        cityName: "mexico-city",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/mexico-city-248909c78a.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/mexico-city_web-a0553ddbe0.jpg",
    },
    {
        cityName: "miami",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/miami-730928937f.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/miami_web-9307474a5e.jpg",
    },
    {
        cityName: "milan",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/milan-536b0cd6d3.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/milan_web-b92932c77a.jpg",
    },
    {
        cityName: "milwaukee",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/milwaukee-aa45ba9b6b.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/milwaukee_web-59a01d05ad.jpg",
    },
    {
        cityName: "minneapolis-saint-paul",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/minneapolis-saint-paul-0167dd447d.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/minneapolis-saint-paul_web-16dbfd4210.jpg",
    },
    {
        cityName: "minsk",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/minsk-d5bfd8baf5.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/minsk_web-52223909af.jpg",
    },
    {
        cityName: "montevideo",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/montevideo-0a62686b66.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/montevideo_web-24b23f6ce1.jpg",
    },
    {
        cityName: "montreal",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/montreal-3499a883aa.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/montreal_web-4f942eeee8.jpg",
    },
    {
        cityName: "moscow",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/moscow-99ccf7ba84.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/moscow_web-3b49a7d2d1.jpg",
    },
    {
        cityName: "mumbai",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/mumbai-03cddd9bd2.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/mumbai_web-21682401ea.jpg",
    },
    {
        cityName: "munich",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/munich-b190ea0a11.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/munich_web-2b4628b75d.jpg",
    },
    {
        cityName: "nairobi",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/nairobi-8e8453c4de.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/nairobi_web-1d43d8c0ec.jpg",
    },
    {
        cityName: "nantes",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/nantes-593fbe5c58.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/nantes_web-ed6d93e5fb.jpg",
    },
    {
        cityName: "naples",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/naples-ddc3b31e44.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/naples_web-64f4f4ab42.jpg",
    },
    {
        cityName: "nashville",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/nashville-79d8242c30.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/nashville_web-928afede11.jpg",
    },
    {
        cityName: "new-orleans",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/new-orleans-1d86b69be5.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/new-orleans_web-7a3fec60d7.jpg",
    },
    {
        cityName: "new-york",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/new-york-9cb6cc2ae5.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/new-york_web-99d9bb0809.jpg",
    },
    {
        cityName: "nice",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/nice-b3ec9f6de2.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/nice_web-ccca0a78c0.jpg",
    },
    {
        cityName: "nicosia",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/nicosia-c5c75a628f.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/nicosia_web-221f3941f7.jpg",
    },
    {
        cityName: "oklahoma-city",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/oklahoma-city-429f6bf45d.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/oklahoma-city_web-2d2437c3f2.jpg",
    },
    {
        cityName: "omaha",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/omaha-65cfdabcd3.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/omaha_web-43f20ccdd7.jpg",
    },
    {
        cityName: "orlando",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/orlando-9dfb4090da.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/orlando_web-77cf0adb77.jpg",
    },
    {
        cityName: "osaka",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/osaka-acd34c98bd.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/osaka_web-eac2ef7c0e.jpg",
    },
    {
        cityName: "oslo",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/oslo-85b1f2e525.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/oslo_web-dc398e708e.jpg",
    },
    {
        cityName: "ottawa",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/ottawa-b78a66e47b.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/ottawa_web-ad27c8487d.jpg",
    },
    {
        cityName: "oulu",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/oulu-c043235399.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/oulu_web-ffdd3f6861.jpg",
    },
    {
        cityName: "oxford",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/oxford-3025c52c07.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/oxford_web-c28bba265a.jpg",
    },
    {
        cityName: "palo-alto",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/palo-alto-c7dc854872.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/palo-alto_web-c5d0b34c18.jpg",
    },
    {
        cityName: "panama",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/panama-115e3623c6.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/panama_web-58f27bf2e2.jpg",
    },
    {
        cityName: "paris",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/paris-0ae0bb626e.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/paris_web-0a3c7314a5.jpg",
    },
    {
        cityName: "perth",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/perth-1e220f50f9.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/perth_web-99a082a61e.jpg",
    },
    {
        cityName: "philadelphia",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/philadelphia-41bf6ab8ef.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/philadelphia_web-ebd7cad1dc.jpg",
    },
    {
        cityName: "phnom-penh",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/phnom-penh-6f19962eaf.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/phnom-penh_web-1b2c0f98cc.jpg",
    },
    {
        cityName: "phoenix",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/phoenix-9fedc88f57.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/phoenix_web-92224752db.jpg",
    },
    {
        cityName: "phuket",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/phuket-5b86d83465.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/phuket_web-e7beb53e6b.jpg",
    },
    {
        cityName: "pittsburgh",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/pittsburgh-345a34e2d1.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/pittsburgh_web-7ae8545b12.jpg",
    },
    {
        cityName: "portland-me",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/portland-me-441411d1ea.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/portland-me_web-e7c7cdeeee.jpg",
    },
    {
        cityName: "portland-or",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/portland-or-90f71ea149.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/portland-or_web-55a07378b0.jpg",
    },
    {
        cityName: "porto",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/porto-9bc6639329.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/porto_web-46ed9159e9.jpg",
    },
    {
        cityName: "porto-alegre",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/porto-alegre-1a625034e0.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/porto-alegre_web-b066e1ebdf.jpg",
    },
    {
        cityName: "prague",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/prague-1857bf62f8.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/prague_web-c800dc9a25.jpg",
    },
    {
        cityName: "providence",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/providence-790d7e19eb.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/providence_web-0fd0aa674f.jpg",
    },
    {
        cityName: "quebec",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/quebec-b460753757.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/quebec_web-21a4ca0a12.jpg",
    },
    {
        cityName: "quito",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/quito-6913384127.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/quito_web-1b3a380ae3.jpg",
    },
    {
        cityName: "raleigh",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/raleigh-e74249142f.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/raleigh_web-2909c09abe.jpg",
    },
    {
        cityName: "reykjavik",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/reykjavik-88db0aa26d.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/reykjavik_web-042068d0d4.jpg",
    },
    {
        cityName: "richmond",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/richmond-e06cc3dd7a.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/richmond_web-3895e986fd.jpg",
    },
    {
        cityName: "riga",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/riga-9f3e30aa43.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/riga_web-807b1f301a.jpg",
    },
    {
        cityName: "rio-de-janeiro",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/rio-de-janeiro-448ecb9d55.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/rio-de-janeiro_web-600ed3659c.jpg",
    },
    {
        cityName: "riyadh",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/riyadh-41db8948a7.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/riyadh_web-2d119597b7.jpg",
    },
    {
        cityName: "rochester",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/rochester-2ec3648b5b.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/rochester_web-d2be9d4ad1.jpg",
    },
    {
        cityName: "rome",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/rome-d6d22de42a.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/rome_web-30e1610428.jpg",
    },
    {
        cityName: "rotterdam",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/rotterdam-b868125e33.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/rotterdam_web-7c9e610e58.jpg",
    },
    {
        cityName: "saint-petersburg",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/saint-petersburg-a33d8a3855.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/saint-petersburg_web-21e57b67e5.jpg",
    },
    {
        cityName: "salt-lake-city",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/salt-lake-city-5cee380c68.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/salt-lake-city_web-d763c20ea8.jpg",
    },
    {
        cityName: "san-antonio",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-antonio-462487f470.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-antonio_web-37402dd546.jpg",
    },
    {
        cityName: "san-diego",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-diego-50187120db.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-diego_web-2be4eba8b4.jpg",
    },
    {
        cityName: "san-francisco-bay-area",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-francisco-bay-area-7f6d130d20.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-francisco-bay-area_web-f17b1f60e6.jpg",
    },
    {
        cityName: "san-jose",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-jose-0a8dfb4120.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-jose_web-c73054cc3d.jpg",
    },
    {
        cityName: "san-juan",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-juan-3bd27f2866.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-juan_web-d1d8e2cefe.jpg",
    },
    {
        cityName: "san-luis-obispo",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-luis-obispo-d0a7b76532.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-luis-obispo_web-496eff09a5.jpg",
    },
    {
        cityName: "san-salvador",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-salvador-670f5797be.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-salvador_web-83ecca0109.jpg",
    },
    {
        cityName: "santiago",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/santiago-9be57c2056.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/santiago_web-f067d55885.jpg",
    },
    {
        cityName: "santo-domingo",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/santo-domingo-6e37620cfa.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/santo-domingo_web-22dddd55a7.jpg",
    },
    {
        cityName: "sao-paulo",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/sao-paulo-94ecdb90e1.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/sao-paulo_web-843ef93d03.jpg",
    },
    {
        cityName: "sarajevo",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/sarajevo-2896c2d925.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/sarajevo_web-848cc27676.jpg",
    },
    {
        cityName: "saskatoon",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/saskatoon-30832d3006.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/saskatoon_web-2d387ccb1f.jpg",
    },
    {
        cityName: "seattle",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/seattle-9bc4830d22.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/seattle_web-e07e580eca.jpg",
    },
    {
        cityName: "seoul",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/seoul-f160535ee8.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/seoul_web-9dce6f94da.jpg",
    },
    {
        cityName: "seville",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/seville-06e4e83013.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/seville_web-71bb9fb523.jpg",
    },
    {
        cityName: "shanghai",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/shanghai-562387e4cf.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/shanghai_web-c8b77b4215.jpg",
    },
    {
        cityName: "singapore",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/singapore-ec606a40aa.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/singapore_web-64dc53f309.jpg",
    },
    {
        cityName: "skopje",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/skopje-195c6bb2d8.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/skopje_web-be51bbdcf8.jpg",
    },
    {
        cityName: "sofia",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/sofia-141d3a06cb.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/sofia_web-f5f214e15a.jpg",
    },
    {
        cityName: "st-louis",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/st-louis-f0a3fe18ae.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/st-louis_web-fa014f308c.jpg",
    },
    {
        cityName: "stockholm",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/stockholm-a696fe73b4.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/stockholm_web-1e571c8d62.jpg",
    },
    {
        cityName: "stuttgart",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/stuttgart-87cad578bb.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/stuttgart_web-5b7db8ffed.jpg",
    },
    {
        cityName: "sydney",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/sydney-c1efeae24e.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/sydney_web-b47b8df85c.jpg",
    },
    {
        cityName: "taipei",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/taipei-f36fb8cb4f.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/taipei_web-f5a4807f35.jpg",
    },
    {
        cityName: "tallinn",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/tallinn-9a026090f2.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/tallinn_web-62f5720550.jpg",
    },
    {
        cityName: "tampa-bay-area",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/tampa-bay-area-4fba731a6c.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/tampa-bay-area_web-5255a94190.jpg",
    },
    {
        cityName: "tampere",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/tampere-693eab6b1f.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/tampere_web-9d4b053a3c.jpg",
    },
    {
        cityName: "tartu",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/tartu-c02c88145f.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/tartu_web-21105f154b.jpg",
    },
    {
        cityName: "tashkent",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/tashkent-fdb0651726.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/tashkent_web-c6d0624749.jpg",
    },
    {
        cityName: "tbilisi",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/tbilisi-583faa1bea.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/tbilisi_web-7290a90e85.jpg",
    },
    {
        cityName: "tehran",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/tehran-73f1f81d6a.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/tehran_web-a7a0f37723.jpg",
    },
    {
        cityName: "Tel Aviv-Yafo",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/tel-aviv-093f2769f7.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/tel-aviv_web-aa55da3c93.jpg",
    },
    {
        cityName: "the-hague",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/the-hague-3f49f579da.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/the-hague_web-429f03ab02.jpg",
    },
    {
        cityName: "thessaloniki",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/thessaloniki-344274e98e.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/thessaloniki_web-570a6c22fc.jpg",
    },
    {
        cityName: "tokyo",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/tokyo-5d21b97864.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/tokyo_web-7a20b5733f.jpg",
    },
    {
        cityName: "toronto",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/toronto-a6fcbe977a.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/toronto_web-595a067cf7.jpg",
    },
    {
        cityName: "toulouse",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/toulouse-7d86bd787e.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/toulouse_web-b6d5624c8d.jpg",
    },
    {
        cityName: "tunis",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/tunis-abea50beaa.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/tunis_web-48eab0072e.jpg",
    },
    {
        cityName: "turin",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/turin-14f7e3e0bc.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/turin_web-d91d1c8483.jpg",
    },
    {
        cityName: "turku",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/turku-5dce86ae59.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/turku_web-7e7c0aa9a2.jpg",
    },
    {
        cityName: "uppsala",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/uppsala-8894875121.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/uppsala_web-3782bddd42.jpg",
    },
    {
        cityName: "utrecht",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/utrecht-6fa216ef08.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/utrecht_web-43fa409833.jpg",
    },
    {
        cityName: "valencia",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/valencia-569b04926d.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/valencia_web-5b6c44448d.jpg",
    },
    {
        cityName: "valletta",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/valletta-cae829d4be.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/valletta_web-c60360e66d.jpg",
    },
    {
        cityName: "vancouver",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/vancouver-3160f806cf.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/vancouver_web-049c25e7e4.jpg",
    },
    {
        cityName: "victoria",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/victoria-d001822c68.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/victoria_web-7305a177ca.jpg",
    },
    {
        cityName: "vienna",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/vienna-8cf316bb2d.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/vienna_web-b2c460ae31.jpg",
    },
    {
        cityName: "vilnius",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/vilnius-ba39720a40.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/vilnius_web-d6b05ff0e7.jpg",
    },
    {
        cityName: "warsaw",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/warsaw-06c037d5b1.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/warsaw_web-d6a52b39b9.jpg",
    },
    {
        cityName: "washington-dc",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/washington-dc-bd9a973760.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/washington-dc_web-cdb977d1bf.jpg",
    },
    {
        cityName: "wellington",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/wellington-871a5e9768.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/wellington_web-423e1575c9.jpg",
    },
    {
        cityName: "winnipeg",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/winnipeg-0a3f7a988f.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/winnipeg_web-3c1d2f955f.jpg",
    },
    {
        cityName: "wroclaw",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/wroclaw-1e6f2fb3b9.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/wroclaw_web-f8ee8c2037.jpg",
    },
    {
        cityName: "yerevan",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/yerevan-5a9074bfec.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/yerevan_web-3f82ff0524.jpg",
    },
    {
        cityName: "zagreb",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/zagreb-bb298592a7.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/zagreb_web-e6000a6793.jpg",
    },
    {
        cityName: "zurich",
        cityPhoto: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/zurich-bdbfcd03fa.jpg",
        web: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/zurich_web-f08acd93ea.jpg",
    },
];
export { cityImageArray };
