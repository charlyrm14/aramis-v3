import React from "react";

interface ModalProps {
  idModal: string;
  title: string;
  subtitle: string;
  widthClass?: string;
  children: React.ReactNode;
  onCancel?: () => void;
  btnCancel?: string;
  onConfirm?: () => void;
  btnConfirm?: string;
  disabled?: any;
}

const Modal: React.FC<ModalProps> = ({
  idModal,
  title,
  subtitle,
  widthClass,
  children,
  onCancel,
  btnCancel,
  onConfirm,
  btnConfirm,
  disabled,
}) => {
  return (
    <div
      className="modal fade"
      id={idModal}
      tabIndex={-1}
      aria-hidden="true"
      data-bs-backdrop="static"
    >
      <div
        className={`modal-dialog ${widthClass ? widthClass : ""}`}
        style={widthClass ? {} : { maxWidth: "fit-content" }}
      >
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header pb-0 border-0 justify-content-end">
            <div
              className="btn btn-sm btn-icon btn-active-color-primary"
              data-bs-dismiss="modal"
              onClick={onCancel}
            >
              <i className="ki-outline ki-cross fs-1"></i>
            </div>
          </div>
          {/* End Modal Header */}

          {/* Modal Body */}
          <div className="modal-body mx-5 mx-xl-18 pt-0 pb-15">
            {/* Header Body */}
            <div className="text-center mb-13">
              <h1 className="mb-3">{title}</h1>
              <div className="text-muted fw-semibold fs-5">{subtitle}</div>
            </div>
            {/* End Header Body */}

            {/* Content */}
            <div>{children}</div>
            {/* End Content */}

            {/* Buttons */}
            <div className="d-flex justify-content-between">
              <button
                type="reset"
                className="btn btn-light me-3"
                data-bs-dismiss="modal"
                onClick={onCancel}
              >
                {btnCancel}
              </button>
              <button
                type="button"
                className="btn btn-lg btn-primary"
                onClick={onConfirm}
                disabled={disabled}
              >
                {btnConfirm}
              </button>
            </div>
            {/* End Buttons */}
          </div>
          {/* End Body */}
        </div>
      </div>
    </div>
  );
};

interface ButtonModalProps {
  desc: string;
  idModal: string;
  icon?: string;
  onClick: () => void;
}

const ButtonModal: React.FC<ButtonModalProps> = ({
  desc,
  idModal,
  icon,
  onClick,
}) => {
  return (
    <button
      type="button"
      className="btn btn-sm btn-primary btn-flex btn-center btn-active-light-primary"
      data-bs-toggle="modal"
      data-bs-target={`#${idModal}`}
      onClick={onClick}
    >
      {desc}
      <i className={`ki-outline ki-${icon} fs-5 ms-1`}></i>
    </button>
  );
};

export { Modal, ButtonModal };
