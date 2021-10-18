import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tercera',
  templateUrl: './tercera.page.html',
  styleUrls: ['./tercera.page.scss'],
})
export class TerceraPage implements OnInit {
  private character = [
    {
      id: '1',
      nombre: 'EREN',
      imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwzJ8PJu_Ey9m13AZNQSJyn07-leXr9NU06SQnRgGHHMcYGmFsrKGduORcGlJbfdVtHTM&usqp=CAU://static.wikia.nocookie.net/ssbb/images/b/b8/025Pikachu_LG.png/revision/latest?cb=20190520161120&path-prefix=es:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEBIQEhMVEBAVEhAPDw8PFhAQEBAQFREWGBUVExUYHCggGBonGxYXIjEhJSkrLi4uFx8zPTMtOCgtLisBCgoKDg0OGxAQGi0lHyUtLS4tLTAtLS8vLS4tLS0tLi0tMC0tLS0tLS0tLy0wLS0tLTAtLSstLS0tKy0tLS0tL//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUCAwYBBwj/xAA9EAACAQIDBAcGBQMCBwAAAAAAAQIDEQQSIQUxQVEGE2FxgZGhByIyUrHBFEJy0fAWI2IVsiRTY4KSotP/xAAbAQEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EADgRAAIBAgQDBQYEBgMBAAAAAAABAgMRBBIhMQVBUQZxgZGhEyJhscHRFDLC8DNCUmJy4SSS8RX/2gAMAwEAAhEDEQA/APuIBrq1IxWaTUY8XJpJeLANgMYyTV001zWqMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVXSPY1PHYSthKvwVYOF97hLfCa7YySa7i1AB+RqscVs3EVKCnUwtelNwqdROdNOS3NZWrxas1femj6R7OPaRj62Jp4OtkxcZKTdWpalVpwjFttygrS3JWcbttanW+1XoCto0/xGHSWOpRsloliaa16uTeiktcrfNp6O6+Tey6t1O1qUZpxlKOIw7jJZZQnkbtJPVO8LW5kLG1J0qFScN1FteCfyM4JOSTP0ph8XCeievIknMSVyRh8fOno/fjy5eJQYHtNGXu4mNv7lt4rfyv3G+eG/pZfg0YbERqK8X4cjedTTqRqRUoO6ezRGaa0YABmeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+de0PoA8RUjtHBJQx9KVOq4aRhiuraaUnwnpa+5rR8GvooMZRUk09mDidm7RVanGok4XXvU5pxnTmtJQnF6qUWmmuaZMUi12lsmNS8oWhV+bhPTdLnu37yhc5Qk4TWWS4PiuafFHzzifCZ4Sd1rB7P6P4/PddFaUpxqrTfoS6c3F5ouzLzA4xVFbdJb0c/CZsi2mmnZrVNGvhnFKmCn1g94/VdH89n8MalJTWu/U6gELAYvrFZ6TW9fc2VcZCO968jv1jcO6KrZ0oPZt28O9c1uV7hJPLbUkgrJ7U5RfoY/6m+X0K2faLAR2k33Rf1sbPw9ToWoKuO03xRup7Ri9/u+ptpcdwNR2z270167ep46E1yJwNXXRte6tzIlXakV8Kzdu4mV8dh6Ec1SaV9td+5LV+BjGEpbIsDXUqKO9pd7SKWrj6kuOVcl+5Gavq9XzZQ4ntRSjpRg5fF6eS1b9DdHDP+Zl3LaFNfmv3Js1vacOCb9CpVj1SKqfabGPZRXg/q2blhofE5npr7Uns3ErDrCKvelGspuv1TtKU42ceqlxg+JQR9u0uOz427MS//ifP/aBtZYraOIqRd4Rl+HpPnGksunO88zX6jq+gnslrYrLXxylhsPpKND4cRWX+X/Ki+33uxaM7LBSrSw8HV/M0m9Lb628EQp2zOx9T6B9MltanUqRw1WhCDUesqOMqdSXGMJLVtcdOJ1hHwWDp0KcKNKEadKEVCFOCtGMVwSJBMMQAAAAAAAAAAAAAAARsZg4Vo5Zq/J7pRfNPgSQYyipJxkrp8j1NrVHLYrZdSlrG9WnzXxRXbHj3ryNeHqpnWlHteMc6srS/PJad1zkeNcGo0aTr0nb+3e93y6eOndsTqOIc3ll5/ciP1MkYxRtijkXoSXoY2PcpmkZWMbmGY1ZRY2WPGhc9uameTmkjKSI+IhdW+mhkkmZLXcwniUjTPGrmXVLo/h5JStOSe685L6WJtDZVGHw04X5tKUvN6nVUuzFV/mnFL4Xf2NDxVNbJs5ijXlP4ISqfoTa89yGP2LjMRTdOE4YTOnGVaX9ypTi97pQi7OVuLkrb9TtQW2H7O4ak1Kbcmuui8tfmaZ4uUlZKxxvRL2cYHZuWcIOviFuxOItOcX/04pZYd6V+bZ2QBfEQAAAAAAAAAAAAAAAAAAAAAHO46V6s3/NNPsdDc5icrtvm/ozl+1FS1GnT6tvyVv1EvCL3mzKLNkJXV1qua3HxP2obYliNoxwNScqeDpToQqqLspSmoTnOXOykkr7rPmdv/wAFs7GYChs+atiZTp4ihTm6kJQ6puFZq9ozUlFX4ptcrUj4FUeEWIzK7jmy25b733trtblc3urrY7g9ueIFCZC54z05np7tX8NhoXnKlCtiKGGq1oXjKlSm26kotfC8sWr71e/A2UKTrVI047tpeZ43Y6BzV2rq63riu9GDPjntR2dgcFVwtfZtXq67u5uhUc3bfGbd97e/nc+mdFNqPGYLD4mVlOpTTqW0XWJuM7LgsyZbcQ4TLBxjPNmT02tr5vR/tHtKpmex2OyZ3pLsbXqTis2JL3ZR5P6k2riIw+KSR2vDa8PwNOcpK2VJtu35dH8iBVi/aNLqbgV9TakFu970NEtqt7kl9TCtxvA0tHUT/wAbv1St6hUKj5FuYt236FHPGTf5v54Gpyvv/Yqqvamiv4dNvvaXyzG1YV83+/QvJ4qC/MvVml7Rhwfpb6lQeldU7UYpv3IRS8W/n9DYsLHm2WMtp8o+pre0Jd3qQj0r58cx896r8El8kZqhTXIkPGT+ZeiLWinlV9XxuVODpZppcOJdnSdnFXqxnXrTlK/uq7b21b1fdr8GupHxGVWSQAB05GAAAAAAAAAI+LmowlJuyUW23w03nCLpNSzZctS17Z/d88vL1Oo6YVHHA12t+RJ9znFS9Gz5OplDxbC0q9SPtOS01tu9X6L4HR8GwUKtKU59beSX3JHTzoBLHVVjMJOnnnGmqsKjap1FFWjOMknaVklZrgjb7PvZ08DW/F4mcJ10pRo06V3TpZlaUnJpOUrNrckrvfwvOh+NbjOi3u/ux7FopLzafmdGpnMYrHYuhB4PPeC02V3Hkr725emxHxGE9lVcen7/APfjc3XNOJx9Ok4qpUp03L4FVnCm5WaXu3eurXmjOE77udvE1VsVTTSlKF1qk7NxfPs7ymitdrmlxZJbKvpJsWnj8NUw1W+SaVpR+KFRO8ZR7U/PcWEaiaummuDWqZj1qe7m14oU5ShJSjo16MZbnxiPsjxnW5OuoKle3XrrHPLzVK3xdma3afSqVahs6hSwsc0urpxhGKtmsl8VR7k29fHcW+JxKpwnN7owlO3Oy3HzyvWcpOUneTblJ82zoqNSvxJ/8mV4x5Kyu33dF+1qWHD8DGo3KWy9f3zPpPRTacK7nlvFpLNCVrrk+1bybtuFpRlzv5o4v2d1H+LaW50Z5u7NH72PoG06Wam+a1Xhv9C6qYFS4ZOjT5Xkub0ea3zS568yDj6Sw2Mstml66FEjIwTMkzhDMzPTBGR4YmSB4EeHhkAZ0aeaSiuL8u3yMqdOVWahBXbaS72eN21LLZtK0c3GX2JxhGNkkt25GZ9VwmHjhqMaMdorz6vxd2Vc5ZncAAkGIAAAAAAAABGxuFVWnUpPRThOm+aUla58Sx1CeHqzpVFaUW4vk+TXYz7scZ0vwNOpU96Kk8se/jxWvIquLSVKmqr5O3n9mXXBsf8Ah5uEleMvRrn9zluhybqyn+VU5JvtbVl6M6zOVOEjGkssIqEd9lz5vmyUqxxGMm69Vzt0XkTcVWVao5pWRKcIt3d0+NnKN++z1NlO0VZJJdmhDVcy68iOLasRspunTjv3X35W4377PU9jJJWWi4Ed1zB1z3Kz2x7tVOVCrFat03ZcW1rb0PntSrrY7qpirEBYClKed0477t5Va/O265aYHEfh4SUlpv6Fhg8ZHDxalFtb6W9b/Mt/ZpsqUITxM1brEoUk9+RO8n3N2/8AE7pq+hH2fbqqdt2SH+1Ek7zDQyUor4X89TmcZiZYmtKpLny6JbI5jE08k5R5afzwNaZZbbpaxn4Pv4FWmfOOJYX8NiZ01te67nqvLbvTJtKeeCZm5Jb9O8yTubMDVy1Ivhx7t33L2WFg98IvvjF/YmcN4KsbSc1UytO1st+Sd75l8uRrq1/Zu1igRkXMtn03+W36W4/Q0vY9L/Nd1So/qyVPstiP5KkX33X0ZrWKi+TKwstl0tHN8fdXhvfn9DF7IjwnUXjF/WLLCEUkktEkklySJ/COB1MLX9rWadl7ttdXz1S2XzNdavGUbRNgAOoIoAAAAAAAAAAAAOU2pHNXm/DyVjqzlXrKT5yOa7T1HGhTj1k35L/ZLwa95sh1cImQatOxeSpldUp2lle57jj6dRllF32KqdS3E1vEdpbT2emaZbL7CTGrB7meZdCteK7T1Vr82Tv9M7DZDAqOrPXVprY9zLkaMLQzcCf+D0N+Co6X8lyRJnAi1KrzGpy1LjYUr4eC4rNHybt6WLE5jrZQw7cJONqizNdqt9bECdeUvilKXidj/wDcjh6FOMoOUnCL3ST5b6810K78O5SbvzZ1ePipU5RbS0vq0tVqc0maYmaZzvE+ILGzjPJlaVt735rkttfMlUaXs01e5tudPhqueEZcWte/j6nLJl5sOpeDj8ruu6V/umT+zVbJiJUv6l6x/wBNmrFxvFPoWgAO3K8AAAAAAAAAAAAAAAAAA8uclh5XOnxUssJPkmzjMBiLynHjGbXg9V9fQ5HtRq6S6KT88v2JuDW/gXCRFxdG67VqiRTkZTV0cem0yUm4si4d3RvykalpJrxRLRnLcyluapxIso5pZeG9/sS68rK5qwUNLve9T1aK56nZXJMIWRhV3Gxsj4ipoa1uYR1ZtwEOtoYmmtd2n+Vm16pHM4PacJRcsySj1ilfTL1btK/84ovuh+NTlXbaUXN2baStHReh8u6QXw+NxVOEk4OdW2VpxdOraVvJx8Y9h1n4H2+CpS5xzRf/AGbS8FcxopOpKPc/ofS6NGco5lTlKO5SilK/gtfQ8kmviTh+tOH+5Iieyra0qkKuHm7uGSdO+/LbK14ZY+Z35Jo9nqFWlGWeSdtdmr8+S5mirWlTm4tI4mNRPc0+5plnsOrarl+ZW8Vr9Ey/qUYy+KKl3pM1RwlNNNU4KS3NRSa7nY2YXgEsNXjVjVvZ7ZbabP8AmfJ7mE8SpxcWvUkgA6UiAAAAAAAAAAAAAAAAAAFdt2dqMl8zS+/2Pn1fEdTXc/ytJS+z8PuztekdT4I/qb9LHLbSwWdXOJ4xXjLHOL2UVH9X6ixw0bU7lphcUpJNMlKocRhMXPDyyu7h6x7uw6LCY9TV4u/cUlfCuGq26kvKpE6cveXkS4lZGonJLe73suFufIsYsjyVrHk1Y04x+75L1PaU7GvHv3G9XbXTeRI4pNXTUlzi7oyy3iexjdFjUqnP7a2nZZIv3norcFzNG09sWvGGst1uC7/2I+ydnym887tvVt8SXRw6pr2lTwPHZaIxx2zs+z60LXeXrYpK7coWkklxelvE+efA8svdfKXuvyZ9ojDJa2lrW7zr1lqRTaUk0nZpNbu0veBpYj2ibtqn53+yNNTEOjZWun8T4z7NMb1ePpK+lSNSjLxjmX/tCPmfbCBHZGHU1UVCipxeaM1Tp54vmpWumTzqMPRdKOW9yDiKyqyzWtoAAbzQAAAAAAAAAAAAAAAAAAAAActt2tes18qivS/3I8VdHm0pXr1P1NeWgps+a8Rm54mpJ/1S9HZFvRjaCXwImK2ZGfAiU9hWbyycE/itxLnMe5iLGvUirJm3KasFgo0lpvespPfJ9pMzEZ1DzrDVK8ndvUZbkiWpS4zYqzZ6bcHvstNSyVQyUzKE5U3eLGVlLhthpO71LmjRUVZGeYxcjKdWc/zMZTCuzotiVM1CHZdeTdvSxzFaR0PRt/2f+5/YvuzbaxTXWL+cSLi17niWwAO3K0AAAAAAAAAAAAAAAAAAAAAAAA47blPJiJ8pWku5rX1TNNKZc9KcJmpqqt8NJfpfHwf1ZzVOqcDxjCuliZdH7y8fs7otsNLNBeRPcjVOrY0yxBDr4gq4Um2S7olyxB515WOsY/iDf7E8zFr+INkMQVCr3MoVzx0bjMXcalzPMVlLEG91zQ6bTPdDOtM6rYFPLh4X3u783p6WOVwVB1qkaa4vV8lzO5pwUUorRJJJcktx1HZ3CtSlWe1sq77pvysvMrcZPaJsAB1ZAAAAAAAAAAAAAAAAAAAAAAAAAMJxTTT1T0ae5o5Ha+w+qU6lOa6tJtwk7OKXC/H6951dSm2VO0Nlynud+alexBx+GhXpO8MzSdtbO/fy8dPg9DbRqOEtHY4N7Qg90teVpfsTdmYRV27zVOKtdtNt35LTkXWK6N1GvdyRfN3l6WRWS6G1L3dRt+S8ilwHB5ylmrxyx6XV35cvEl1sXZWg7svcFhsHRW5TlxnUtJ+C3IsY7XorRZUuSsjkP6UqL8z9T3+lqnzM6enRp01aCsvgV8pyk7s6jEYzDVFaahLvUb+D4FHjNj4aWtKq6b+WXvx/depD/pWp8z9R/SNR/nfqa62Fo1v4kU/n57mUas4flZXYmSoycZSTtxipST0vpZXPMHtGnUqQpqTWaSjnlCahG/GWZbi0pdDKid1U8JLMi1w/R+pFW92/O8l6ZTmMVwerTnelDOv8ktOjv5XRPp4tSj7zs+4uNkbOhQTs805WzSenglwRaJldhcE4pXd3xtuJsINHUUqcKcFGCsly6FfKTk7s2g8R6bDwAAAAAAAAAAAAAAAAAAAAAAAAAAAHlj0AGOVDIjIAGOVDKjIAHlj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k=',
      comentarios: ['Esta re loco','pelea']
    },
    {
      id:'2',
      nombre: 'El piraña',
      imgURL: 'https://data:https://img.playbuzz.com/image/upload/https://img.playbuzz.com/image/upload/ar_1,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_2.5/v1593635737/rvjf76x5y6on15ljvrq.png,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_2.5/v1593635737/rvjf76x5y6on15ljvrq.png/jpeg;base64,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.eldesconcierto.cl/2020/08/A_UNO_1204029_3f6de.jpg:image/https://assets.eldesconcierto.cl/2020/08/A_UNO_1204029_3f6de.jpg://static.wikia.nocookie.net/ssbb/images/b/b8/025Pikachu_LG.png/revision/latest?cb=20190520161120&path-prefix=es;base64,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',
      comentarios: ['El mejor presidente','ola']
    }
  ]

  constructor() {}

  ngOnInit() {
  }

}
