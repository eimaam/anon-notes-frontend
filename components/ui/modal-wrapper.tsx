import { Modal } from "antd";
import { FC, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IModalWrapperProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
    footer?: ReactNode | null;
    [x: string]: any; // Allows for any other props specific to AntD Modal or custom ones
}

const modalAnimation = {
    hidden: {
        opacity: 0,
        y: -50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.3,
            duration: 0.5,
        },
    },
    exit: {
        opacity: 0,
        y: -50,
        transition: { duration: 0.3 },
    },
};

const ModalWrapper: FC<IModalWrapperProps> = ({
    isOpen,
    onClose,
    children,
    title,
    footer = null,
    ...rest
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <Modal
                    title={title}
                    open={isOpen}
                    onCancel={onClose}
                    footer={footer}
                    {...rest}
                >
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={modalAnimation}
                    >
                        {children}
                    </motion.div>
                </Modal>
            )}
        </AnimatePresence>
    );
};

export default ModalWrapper;