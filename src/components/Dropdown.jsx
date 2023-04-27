import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const navigate =useNavigate()
  function handleuiux(event){
    navigate('/uiux');
  }
  function handleweb(event){
    navigate('/web');
  }
  function handlemobile(event){
    navigate('/mobile');
  }
  function handledigital(event){
    navigate('/digital');
  }
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-primary text-lg font-semibold text-secondary shadow-sm hover:text-white">
          Our Services
          <ChevronDownIcon className="-mr-1 h-6 w-6 text-secondary" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right text-white rounded-md bg-primary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
          <Menu.Item>
              {({ active }) => (
                <a
                onClick={handleuiux}
                  className={classNames(
                    active ? 'bg-gray-800 text-gray-200' : 'text-gray-200',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  UI/UX
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={handleweb}
                  className={classNames(
                    active ? 'bg-gray-800 text-gray-200' : 'text-gray-200',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Web Dev
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={handlemobile}
                  className={classNames(
                    active ? 'bg-gray-800 text-gray-200' : 'text-gray-200',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Mobile Dev
                </a>
              )}
            </Menu.Item>
            
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={handledigital}
                  className={classNames(
                    active ? 'bg-gray-800 text-gray-200' : 'text-gray-200',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Digital Advertisement
                </a>
              )}
            </Menu.Item>
            {/* <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-300' : 'text-gray-300',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Digital Marketing
                  </button>
                )}
              </Menu.Item>
             </form> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
