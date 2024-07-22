import React, {memo} from 'react'

const footer: React.FC = memo(() => {
    return (
        <footer className="w-full py-2">
            <p className="text-xs font-medium text-center h-[18px]">© 2007–2024 ООО «Логнекс»</p>
        </footer>
    )
})

export default footer