const products = [
    { id: '1', name: 'Cámara IP Domo', price: 50000, category: 'Camaras', img: 'https://www.silicongroup.com.ar/thumb/DS-2CD1H43G0-IZ_800x800.jpg', stock: 50, description: 'Cámara IP HikVision' },
    { id: '2', name: 'Cámara IP Bullet', price: 50000, category: 'Camaras', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_659985-MLU43482606771_092020-F.webp', stock: 50, description: 'Cámara IP Hikvision' },
    { id: '3', name: 'DVR Hikvision', price: 150000, category: 'Grabadores', img: 'https://images.fravega.com/f300/d45fff5220b72a9be7bc3febd13e473f.jpg.webp', stock: 10, description: 'DVR 8 CH Hikvision' },
    { id: '4', name: 'Kit Balun + Plug', price: 1000, category: 'Accesorios', img: 'https://http2.mlstatic.com/D_NQ_NP_826179-MLA31649233179_082019-O.webp', stock: 200, description: 'Kit Balun + Plug' }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products.filter (prod => prod.category === productCategory))
}, 500 )
    })
}